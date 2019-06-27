
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/graphs")
def test():
    data = [{
        "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "y": [7.301,5.396,5.605,6.039,5.364,7.197,5.375,4.594,4.162,6.711]}]

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)



