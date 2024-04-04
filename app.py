from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
uri = "mongodb+srv://project:mongodb123456@cluster0.bscjp6o.mongodb.net/"
client = MongoClient(uri)

db = client["week10"]
Login = db["login"]
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

        
@app.route("/register", methods=["POST"])
def add_login():
    

    data = request.get_json()
    last_Login = Login.find_one(sort=[("_id", -1)])
    last_id = last_Login["_id"] if last_Login else 0
    new_id = last_id + 1
    new_login = {
        "_id": new_id,
        "username": data.get("username"),
        "password": data.get("password"),
        "gender": data.get("gender"),
        "weight": data.get("weight"),
        "height": data.get("height"),
        "age": data.get("age")
    }
    Login.insert_one(new_login)
    return jsonify({"message": "User registered successfully", "user": new_login}), 200

@app.route("/add_gender", methods=["POST"])
def add_gender():
    data = request.get_data(as_text=True)  # ดึงข้อมูลจาก request
    Login.update_one({}, {"$set": {"gender": data}})

    return jsonify({"message": "Age added successfully"}), 200



@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()  # รับข้อมูล JSON จาก HTTP POST request
    username = data.get("username")
    password = data.get("password")

    # ค้นหาข้อมูลผู้ใช้จากฐานข้อมูล
    user = Login.find_one({"username": username, "password": password})

    if user:
        return jsonify({"message": "Login successful", "user": user}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401
    
@app.route("/data", methods=["POST"])
def data():
    data = request.get_json()  # รับข้อมูล JSON จาก HTTP POST request
    Login.update_one({}, {"$set": {
        "weight": data.get("weight"),
        "height": data.get("height"),
        "age": data.get("age")
    }})
    return jsonify({"message": "Data updated successfully"})


@app.route("/get_data", methods=["GET"])
def get_logins():
    logins = Login.find()  # สมมติว่า Login เป็นชื่อ collection ในฐานข้อมูลของคุณ
    login_list = []
    for login in logins:
        login_list.append({
            "_id": login["_id"],
            "username": login["username"],
            "password": login["password"],
            "gender": login["gender"],
            "weight": login["weight"],
            "height": login["height"],
            "age": login["age"]
        })
    return jsonify(login_list), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)
    
