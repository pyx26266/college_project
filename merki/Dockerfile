#
# CliNER Runtime Environment - Docker Container
#

FROM ubuntu

RUN apt-get update && apt -y upgrade
RUN apt install -y build-essential
RUN apt install -y git

RUN git clone https://github.com/Sigfried/merki /home
RUN cp /home/ParseMeds.pm /usr/share/perl5/
RUN echo "yes" | cpan -v
RUN cpan YAML::Syck
RUN cpan XML::Writer
COPY druglist.tsv /home/
RUN mkdir /home/project
WORKDIR /home


CMD ["bash"]
