const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// console.log(`the system uptime is ${os.uptime()} seconds`)
uptime = os.uptime()
console.log(uptime)


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    version: os.version()

}

console.log(currentOs)