from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'nome': "Luqueta",
        'idade': "20"
    },
    {
        'id': 2,
        'nome': "Gusta",
        "idade": "35"
    },
    {
        'id': 3,
        'nome': "Iago",
        "idade": "27"
    }
]

@app.route('/api/tasks/')
def get_tasks():
    response = jsonify(tasks)
    response.headers.add("Content-Type", "application/json")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__=='__main__':
    app.run()