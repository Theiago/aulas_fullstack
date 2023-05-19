from flask import Flask, request, json, jsonify
import mysql.connector

app = Flask(__name__)

banco_de_dados = mysql.connector.connect(host="localhost", user="root", password="iagoiago", database="DB_Alunos")

@app.route("/listar", methods=["GET"])
def listar_alunos():
    query=f'SELECT * FROM tb_aluno;'
    cursor_exec = banco_de_dados.cursor()
    cursor_exec.execute(query)
    resultado = cursor_exec.fetchall()
    return jsonify(resultado)

@app.route("/cadastrar/", methods=["POST"])
def cadastrar():
    data = json.loads(request.data)
    nome = data.get("nome", None)
    turma = data.get("turma", None)
    disciplina = data.get("disciplina", None)

    query = f'INSERT INTO tb_aluno (nome, turma, disciplina) VALUES ("{nome}", "{turma}", "{disciplina}");'
    cursor_exec = banco_de_dados.cursor()
    cursor_exec.execute(query)
    return "cadastrado"


if __name__=='__main__':
    app.run(debug=True)