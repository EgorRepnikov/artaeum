const Eureka = require('eureka-js-client').Eureka

const hostName = process.env.HOSTNAME || 'chat'
const hostPort = process.env.HOSTPORT || 8000

module.exports = new Eureka({
  instance: {
    app: 'chat',
    instanceId: `${hostName}:chat:${hostPort}`,
    hostName: hostName,
    ipAddr: '127.0.0.1',
    port: {
      '$': hostPort,
      '@enabled': true,
    },
    vipAddress: `${hostName}`,
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
      default: [process.env.EUREKA_URL || 'http://registry:8761/eureka/apps/']
    },
    registerWithEureka: true,
    fetchRegistry: true
  }
})