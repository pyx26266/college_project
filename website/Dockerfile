FROM python:3

RUN apt-get update && apt -y upgrade
RUN apt install tesseract-ocr -y
RUN apt install libtesseract-dev -y

COPY requirements.txt /home/
WORKDIR /home

RUN pip install --requirement requirements.txt

COPY dist/ /home/static/
COPY app_client.py /home/

CMD ["python", "app_client.py"]
