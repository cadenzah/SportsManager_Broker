const mosca = require('mosca')
require('dotenv').config()

const port = process.env.PORT || 1883
const dbIP = process.env.DB_IP || 'localhost'
const dbPort = process.env.DB_PORT || 27017

const pubsubSettings = {
  type: 'mongo',
  url: `mongodb://${dbIP}:${dbPort}/sports-manager`,
  pubsubCollection: 'ascoltatori',
  mongo: {}
}

const moscaSettings = {
  port: parseInt(port),
  backend: pubsubSettings
}

const server = new mosca.Server(moscaSettings)
server.on('ready', () => {
  console.log(`${port} 포트에서 실행중...`)

  server.on('clientConnected', (client) => {
    console.log(`Client connected: ${client.id}`)
  })

  server.on('published', (packet, client) => {
    console.log(packet)
  })

  // Example code to generate publish myself
  // server.publish({
  //   topic: '/hello',
  //   payload: 'Hello!',
  //   qos: 0,
  //   retain: false
  // }, () => {
  //   console.log(`message was sent!`)
  // })
})
