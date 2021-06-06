import axios from 'axios'

import Config from '../config/config'

class ResumeUtil {
    async fetchResumeData() {
        let result
        result = await axios.get(Config.apiHost + '/resume', { withCredentials: false, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })

        return result.data
    }
}

export default ResumeUtil