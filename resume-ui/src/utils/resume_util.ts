import axios from 'axios'

import Config from '../config/config'

class ResumeUtil {
    private client
    constructor() {
        this.client = axios.create({
            baseURL: Config.apiHost,
            responseType: 'json'
          })
    }
    async fetchResumeData() {
        let result
        result = await this.client.get('/production/resume', { withCredentials: false, headers: { 'Content-Type': 'application/json' } })

        return result.data
    }
}

export default ResumeUtil