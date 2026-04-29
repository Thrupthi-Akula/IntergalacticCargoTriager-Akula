from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load JSON data
import json
with open("Task 1 - Akula - Parser.json", "r") as f:
    cargo_data = json.load(f)

@app.route("/api/cargo", methods=["GET"])
def get_cargo():
    
    # Business Rule 3
    if request.headers.get("X-System-Override") == "true":
        return "System override denied.", 418

    return jsonify(cargo_data)

if __name__ == "__main__":
    app.run(debug=True)