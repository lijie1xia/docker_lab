from flask import Flask 
app = Flask(__name__)
@app.route("/")
def hello():
    return "Hello, world!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9090)    # Flask 在 容器内部 监听 9090 端口。
