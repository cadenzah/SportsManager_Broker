# SportsManager_Broker

## Introduction

MQTT Broker Server for SportsManager_Device, SportsManager_Server or any other MQTT client program.

## Features

## Tech Stack

- ['mosca.js'](https://github.com/mcollina/mosca)

## Prerequisite

- MongoDB Server Instance (For data store)

## How to use

1. Run `mongod`
```bash
$ sudo mongod
```
2. Download the project
```bash
$ git clone https://github.com/cadenzah/SportsManager_Broker.git
```
3. Locate into project's folder
4. Install npm modules
```bash
$ cd SportsManager_Broker
$ npm install
```
5. Make `.env` file. This file includes environment values used in the server. Those values include:
> - PORT: The port number for the broker server (default value is `1883`)
> - DB_IP: IP address where MongoDB is running (default value is `localhost`)
> - DB_PORT: The port number for the DB (default value is `27017`)

6. Run the broker server
```bash
$ npm run start
```
