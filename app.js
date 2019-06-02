const mosca = require('mosca')
require('dotenv').config()

const pubsubSettings = {
  type: 'mongo',
  url: `mongodb://${process.env.DB_IP}:${process.env.DB_PORT}/sports-manager`,
  pubsubCollection: 'ascoltatori',
  mongo: {}
}

const moscaSettings = {
  port: parseInt(process.env.PORT),
  backend: pubsubSettings
}

const server = new mosca.Server(moscaSettings)
server.on('ready', () => {
  console.log(`${process.env.PORT} 포트에서 실행중...`)

  server.on('clientConnected', (client) => {
    console.log(`Client connected: ${client.id}`)
  })

  server.on('published', (packet, client) => {
    console.log(`Published: ${packet.payload}`)
  })

  server.publish({
    topic: '/hello',
    payload: 'Hello!',
    qos: 0,
    retain: false
  }, () => {
    console.log(`message was sent!`)
  })
})
