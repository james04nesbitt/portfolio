from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This is to handle Cross-Origin Resource Sharing (CORS)

@app.route('/data',methods=["GET"])
def get_data():
    # Your logic to fetch or generate data
    data = {"message": "Hello from the backend!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=8080)