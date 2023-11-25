from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.get_json()

    # Assurez-vous d'avoir reçu les données correctement
    if 'username' in data and 'mdp' in data:
        # Accédez aux valeurs du dictionnaire
        username = data['username']
        mdp = data['mdp']

        # Utilisez les valeurs comme vous le souhaitez
        print(username)
        print(mdp)

        # Faites quelque chose avec les données, par exemple :
        response_data = {'message': f'Hello {username}! Your password is {mdp}'}
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Invalid data received'})

if __name__ == '__main__':
    app.run(debug=True)
