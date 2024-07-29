import firebase_admin
from firebase_admin import credentials, messaging

cred = credentials.Certificate('C:/Users/Shive/Desktop/College_Work/Indigo_HackToHire2024/flight-status-system/backend/firebase-adminsdk.json')
firebase_admin.initialize_app(cred)

def send_flight_status_notification(token, title, body):
    message = messaging.Message(
        notification=messaging.Notification(
            title=title,
            body=body,
        ),
        token=token,
    )
    response = messaging.send(message)
    print('Successfully sent message:', response)
