#
# CliNER Runtime Environment - Docker Container
#

FROM python:3

RUN apt-get update && apt -y upgrade

RUN git clone https://github.com/text-machine-lab/CliNER.git
RUN pip install -r CliNER/requirements.txt
RUN wget http://text-machine.cs.uml.edu/cliner/models/silver.crf
RUN mv silver.crf CliNER/models/silver.crf

RUN mkdir /home/project
WORKDIR /home/project

CMD ["bash"]
