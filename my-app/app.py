from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



countId = 0
users = [
    {"id": 1, "username": "mano", "mdp": "123", "entreprise": "john.doe@email.com"}
]

eventlist = [
    
]

@app.route('/api/list', methods=['GET'])
def addEvent():
    # get args
    eventName = request.args.get('event')
    user = request.args.get('user')
    eventlist.append({user: eventName})
    return jsonify(eventlist)


@app.route('/api/data', methods=['GET'])
def get_data():
    
    
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/dataConn', methods=['POST'])
def post_data_conn():
    data = request.get_json()

    # Assurez-vous d'avoir reçu les données correctement
    if 'username' in data and 'mdp' in data:
        # Accédez aux valeurs du dictionnaire
        username = data['username']
        mdp = data['mdp']

        for user in users:
            if user['username'] == username:
                if user['mdp'] == mdp:
                    response_data = {'message': f'Hello {username}! Your password is {mdp}'}
                    return jsonify(response_data)

    return jsonify({'error': 'Invalid data received'})

@app.route('/api/dataInscr', methods=['POST'])
def post_data_inscr():
    global countId  # Utilisez le mot-clé global pour modifier la variable globale
    data = request.get_json()
    print("connected")
    # Assurez-vous d'avoir reçu les données correctement
    if 'username' in data and 'mdp' in data and 'entreprise' in data:
        print('in')
        # Accédez aux valeurs du dictionnaire
        username = data['username']
        mdp = data['mdp']
        entreprise = data['entreprise']
        countId += 1
        users.append({"id": countId, "username": username, "mdp": mdp, "entreprise": entreprise})

        # Utilisez les valeurs comme vous le souhaitez

        # Faites quelque chose avec les données, par exemple :
        response_data = {'message': f'Hello {username}! Your password is {mdp}'}
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Invalid data received'})

if __name__ == '__main__':
    app.run(debug=True)
