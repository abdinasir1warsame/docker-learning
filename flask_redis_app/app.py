from flask import Flask
import redis

app = Flask(__name__)

# Connect to Redis
r = redis.Redis(host='redis', port=6379, db=0)

@app.route('/')
def home():
    r.incr('hits')
    return f"Hello Flask! welcome to my application."

@app.route('/count')
def count_page():
    r.incr('hits')
    return f"Hello Flask! This page has been visited {r.get('hits').decode('utf-8')} times."

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
