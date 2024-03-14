FROM ubuntu:latest

RUN apt-get update && apt-get -y install software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa

RUN apt update && apt install tzdata -y
ENV TZ=Europe/Warsaw
RUN apt-get update && apt-get -y install netcat curl wget unzip gcc g++ make bash git build-essential python3.11 python3.11-dev python3-pip

RUN python3.11 -m pip install pip --upgrade && python3.11 -m pip install wheel

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

COPY . /usr/src/app

RUN groupadd -r nonroot
RUN useradd -g nonroot --no-create-home nonroot
RUN chown -R nonroot:nonroot /usr/src/app
USER nonroot

RUN chmod 777 docker-entrypoint.sh docker-testentrypoint.sh

EXPOSE 4444
