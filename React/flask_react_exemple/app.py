from flask import Flask, jsonify, request, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key'  # Assurez-vous de définir une clé secrète sécurisée

countId = 0
admin = False
users = [
    {"id": 1, "username": "mano", "mdp": "123", "entreprise": "john.doe@email.com"}
]

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/dataConn', methods=['POST'])
def post_data_conn():
    data = request.get_json()

    if data['username'] == "hackathon" and data["mdp"] == "hackathon":
        response_data = {'message': f'Hello {data["username"]}! Your password is {data["mdp"]}'}
        session['admin'] = True
        return jsonify(response_data)
    else:
        session['admin'] = False
        for user in users:
            if user['username'] == data['username'] and user['mdp'] == data['mdp']:
                response_data = {'message': f'Hello {data["username"]}! Your password is {data["mdp"]}'}
                return jsonify(response_data)

    return jsonify({'error': 'Invalid data received'})

@app.route('/api/dataInscr', methods=['POST'])
def post_data_inscr():
    global countId  # Utilisez le mot-clé global pour modifier la variable globale
    data = request.get_json()

    if 'username' in data and 'mdp' in data and 'entreprise' in data:
        username = data['username']
        mdp = data['mdp']
        entreprise = data['entreprise']
        countId += 1
        users.append({"id": countId, "username": username, "mdp": mdp, "entreprise": entreprise})

        response_data = {'message': f'Hello {username}! Your password is {mdp}'}
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Invalid data received'})

@app.route('/api/admin', methods=['GET'])
def check_admin():
    print(session["admin"])
    if 'admin' in session and session['admin']:
        return jsonify({'message': 'Admin access granted!'})
    else:
        return jsonify({'error': 'Admin access denied!'})        

if __name__ == '__main__':
    app.run(debug=True)
