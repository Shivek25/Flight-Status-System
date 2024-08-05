from flask import Flask, jsonify
from pymongo import MongoClient
from bson import ObjectId
import requests
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus


load_dotenv()

app = Flask(__name__)

username = quote_plus("Shivek")
password = quote_plus("Feb@20020225")
MONGO_URI = f'mongodb+srv://{username}:{password}@cluster0.2rhgye3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

# MONGO_URI = 'mongodb://localhost:27017/'
# MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client['flightstatusdb']
flights_collection = db['flights']

# AVIATIONSTACK_API_KEY = '6dc8e4e9fa1dcabfbb49045c6431d980'
AVIATIONSTACK_API_KEY = os.getenv('6dc8e4e9fa1dcabfbb49045c6431d980')
AVIATIONSTACK_API_URL = f'http://api.aviationstack.com/v1/flights?access_key={AVIATIONSTACK_API_KEY}'

@app.route('/api/update-flights', methods=['GET'])
def update_flights():
    response = requests.get(AVIATIONSTACK_API_URL)
    if response.status_code == 200:
        flights_data = response.json().get('data', [])
        flights_collection.delete_many({})  # Clear previous data
        if flights_data:
            flights_collection.insert_many(flights_data)
        return jsonify({'message': 'Flight data updated successfully'}), 200
    else:
        return jsonify({'error': 'Failed to fetch flight data'}), 500

@app.route('/api/flight-status', methods=['GET'])
def get_flight_status():
    flights = list(flights_collection.find())
    for flight in flights:
        flight['_id'] = str(flight['_id'])
    return jsonify(flights), 200

if __name__ == '__main__':
    # app.run(debug=True)
    port = int(os.getenv('PORT', 5000))  
    app.run(host='0.0.0.0', port=port, debug=True)
