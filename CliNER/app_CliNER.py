from flask import Flask, request
from flask_cors import CORS
from flask import jsonify
import xmltodict
import os
import re

app_CliNER = Flask(__name__)
CORS(app_CliNER)

@app_CliNER.route('/')
def hello():
    return "Hello World!"

@app_CliNER.route('/cliner', methods = ['POST'])
def cliner():
    txt = request.form['txt']
    with open("result.txt", "w") as text_file:
        print(txt, file=text_file)

    cmd = "./cliner predict --txt result.txt --out ./ --model ./models/silver.crf --format i2b2 && cat result.con"
    os.system(cmd)
    with open('result.con', 'r') as fd:
        doc = fd.read()
    result = {}
    result['problem'] = []
    result['treatment'] = []
    pattern = re.compile('c="(.*)" ')

    lines = doc.splitlines()
    for l in lines:
        m = pattern.search(l)
        if (m and l.find('problem') != -1):
            result['problem'].append(m.group(1))
        elif (m):
            result['treatment'].append(m.group(1))
    
    return jsonify(result)

if __name__ == "__main__":
    app_CliNER.run(host="0.0.0.0", port=5002, debug=False)