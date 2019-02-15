const Eureka = require('eureka-js-client').Eureka

const config = require('./config')

const hostName = config.eureka.hostName
const hostPort = config.eureka.hostPort

module.exports = new Eureka({
  instance: {
    app: 'CHAT',
    instanceId: `${hostName}:chat:${hostPort}`,
    hostName: hostName,
    ipAddr: '127.0.0.1',
    port: {
      '$': hostPort,
      '@enabled': true,
    },
    vipAddress: 'CHAT',
    homePageUrl: `http://${hostName}:${hostPort}`,
    statusPageUrl: `http://${hostName}:${hostPort}/chat/health`,
    healthCheckUrl: `http://${hostName}:${hostPort}/chat/health`,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    }
  },
  eureka: {
    maxRetries: Number.MAX_VALUE,
    serviceUrls: {
      default: config.eureka.eurekaUrl
    },
    registerWithEureka: true,
    fetchRegistry: true
  }
})
