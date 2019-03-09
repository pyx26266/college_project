from flask import Flask, render_template, request
from werkzeug import secure_filename
from flask_cors import CORS
from googletrans import Translator
from flask import jsonify
from PIL import Image
import pytesseract
import xmltodict
import requests
import os
import re
import json

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        print(f.filename)
        f.save(secure_filename(f.filename))
        text = pytesseract.image_to_string(Image.open(f.filename))
        with open("Result.txt", "w") as text_file:
                print(text, file=text_file)
        result = ''
        with open("Result.txt") as output:
                mode = 0
                
                for line in output.readlines():
                    if "Signature" in line:
                        break
                    elif mode == 1:
                        result += line
                    elif "advice" in line:
                        mode = 1
        return jsonify(result)

@app.route('/translate', methods = ['GET', 'POST'])
def trans_txt():
        txt = request.form['txt']
        print(txt)
        translator=Translator()
        translation = translator.translate(txt,dest='hi')
        return translation.text
            
@app.route('/merki', methods = ['POST'])
def merki():
        txt = request.form['txt']
        r = requests.post('http://localhost:5001/merki', data={'txt': txt})
        print(txt.encode('utf8'))
        print(r.text)
        # with open("result.txt", "w") as text_file:
        #         print(txt, file=text_file)
        # os.system("docker cp result.txt merki_vm:/home/result.txt")
        # cmd = "docker exec merki_vm perl parseFromShell.pl result.txt > result.txt"
        # os.system(cmd)
        # with open('result.txt') as fd:
        #         doc = xmltodict.parse(fd.read())
        # print(jsonify(doc))
        return r.text

        

if __name__ == '__main__':
   app.run(debug = True)