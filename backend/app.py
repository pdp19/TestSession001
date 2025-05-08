
from flask import Flask, request, jsonify
from flask_cors import CORS
from src.utils.mongo_db import MongoDB
import jwt
import datetime
import bcrypt
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://testsession001.bixbites.com"}})
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
mongo_db = MongoDB()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'No input data provided!'}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required!'}), 400

    user = mongo_db.get_user_by_email(username)
    if not user:
        return jsonify({'message': 'Invalid username or password'}), 401

    stored_password = user.get('password')
    if not stored_password:
        return jsonify({'message': 'Invalid username or password'}), 401

    if not bcrypt.checkpw(password.encode('utf-8'), stored_password):
        return jsonify({'message': 'Invalid username or password'}), 401

    token_payload = {
        'user_id': str(user['_id']),
        'email': user['email'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }
    token = jwt.encode(token_payload, app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify({'token': token})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
