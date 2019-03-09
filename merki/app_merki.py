from flask import Flask, request
from flask_cors import CORS
from flask import jsonify
import xmltodict
import os

app_merki = Flask(__name__)
CORS(app_merki)

@app_merki.route('/')
def hello():
    return "Hello World!"

@app_merki.route('/merki', methods = ['POST'])
def merki():
    txt = str(request.form['txt'].encode('utf8'))
    txt = txt.replace("\\r\\n", "\n")
    txt = txt.replace("\\n", "\n")
    with open("result.txt", "w") as text_file:
        print(txt, file=text_file)

    cmd = "perl parseFromShell.pl result.txt > tmp.txt"
    os.system(cmd)
    with open('tmp.txt', 'r') as fd:
        doc = xmltodict.parse(fd.read())
    return jsonify(doc)

if __name__ == "__main__":
    app_merki.run(host="0.0.0.0", port=5001, debug=True)