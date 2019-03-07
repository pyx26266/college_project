#
# CliNER Runtime Environment - Docker Container
#

FROM ubuntu

RUN apt-get update && apt -y upgrade
RUN apt install -y build-essential
RUN apt install -y git
RUN apt install -y python3 
RUN apt install -y python3-pip

RUN pip3 install Flask
RUN pip3 install xmltodict
RUN git clone https://github.com/Sigfried/merki /home
RUN cp /home/ParseMeds.pm /usr/share/perl5/
RUN echo "yes" | cpan -v
RUN cpan YAML::Syck
RUN cpan XML::Writer
COPY druglist.tsv /home/
COPY app_merki.py /home/
WORKDIR /home
RUN pip3 install flask-cors

CMD ["python3", "app_merki.py"]
