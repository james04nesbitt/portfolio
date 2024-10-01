from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data',methods=["GET"])
def get_data():
    # Your logic to fetch or generate data
    data = {"message": "Hello from the backend!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=8080)