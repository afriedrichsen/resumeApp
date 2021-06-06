const env: string = 'production'
let dbUrl: string = ''


if (env === 'development') {
    dbUrl = process.env.RESUME_DB_ENDPOINT_URL || 'http://localhost:2112'
}

const Config = {
    env: env,
    dbUrl: dbUrl
}
export default Config