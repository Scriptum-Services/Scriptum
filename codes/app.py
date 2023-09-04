from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simulated in-memory storage (replace with a database in a real app)
documents = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save_document', methods=['POST'])
def save_document():
    data = request.json
    doc_id = data.get('id')
    doc_content = data.get('content')
    if doc_id and doc_content:
        documents[doc_id] = doc_content
        return jsonify({'message': 'Document saved successfully'})
    return jsonify({'error': 'Invalid data'}), 400

if __name__ == '__main__':
    app.run(debug=True)
