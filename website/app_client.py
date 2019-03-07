from flask import Flask, render_template, request
from werkzeug import secure_filename
from googletrans import Translator
from flask_cors import CORS
from flask import jsonify
from PIL import Image
import pytesseract
import xmltodict
import os
import re
import json

app = Flask(__name__, static_url_path="/static/")
CORS(app)

@app.route('/')
def main():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

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
        translator=Translator()
        translation = translator.translate(txt,dest='hi')
        return translation.text
            
        

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=5000, debug=False)