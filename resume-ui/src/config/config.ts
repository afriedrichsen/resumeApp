const hostName = window && window.location && window.location.hostname && window.location.hostname.toLowerCase()
let apiHost: string =  'http://localhost:3000'

if (hostName === 'alex.friedrichsen.me') {
    apiHost = 'https://alex.friedrichsen.me'
}

const Config = {
    apiHost: apiHost
}
export default Config