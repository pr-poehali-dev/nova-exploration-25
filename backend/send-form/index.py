import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка анкеты с формы сайта на почту организатора."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body", "{}"))
    except Exception:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Invalid JSON"})}

    bride = body.get("brideName", "—")
    groom = body.get("groomName", "—")
    phone = body.get("phone", "—")
    email = body.get("email", "—")
    contact_method = body.get("contactMethod", "—")
    wedding_date = body.get("weddingDate", "—")
    city = body.get("city", "—")
    expectations = body.get("expectations", "—")
    has_style = body.get("hasStyle", "—")
    style_description = body.get("styleDescription", "—")
    comments = body.get("comments", "—")

    html_body = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2a1a1a;">
      <div style="border-bottom: 2px solid #6b1a22; padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="font-size: 1.4rem; font-weight: 400; margin: 0; color: #6b1a22;">
          Новая анкета с сайта — Wabi Sabi Studio
        </h2>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5; width: 40%;"><strong>Невеста</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{bride}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Жених</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{groom}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Телефон</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{phone}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{email}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Способ связи</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{contact_method}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Дата свадьбы</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{wedding_date}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Город</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{city}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Есть идея стиля</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{has_style}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;"><strong>Описание стиля</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8ddd5;">{style_description}</td></tr>
      </table>

      <div style="margin-top: 20px;">
        <p style="font-weight: bold; margin-bottom: 6px;">Ожидания и пожелания:</p>
        <p style="color: #4a3a3a; line-height: 1.6; background: #faf7f4; padding: 12px; border-left: 3px solid #6b1a22;">{expectations}</p>
      </div>

      <div style="margin-top: 16px;">
        <p style="font-weight: bold; margin-bottom: 6px;">Дополнительные комментарии:</p>
        <p style="color: #4a3a3a; line-height: 1.6; background: #faf7f4; padding: 12px; border-left: 3px solid #6b1a22;">{comments}</p>
      </div>

      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e8ddd5; color: #888; font-size: 0.85rem;">
        Wabi Sabi Studio · wabi-sabi-studio.ru
      </div>
    </div>
    """

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    sender = "loarnoar@gmail.com"
    recipient = "loarnoar@gmail.com"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая анкета: {bride} & {groom} — {wedding_date}"
    msg["From"] = sender
    msg["To"] = recipient
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender, smtp_password)
            server.sendmail(sender, recipient, msg.as_string())
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": str(e)}),
        }

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
