import { DynamoDBClient, ListTablesCommand, ScanCommand } from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'
import Config from '../config/config'


class DBClient {
    private client
    constructor() {
        this.client = new DynamoDBClient({ region: 'us-east-2', endpoint: Config.env === 'development' ? Config.dbUrl : undefined })
    }


    async listTables() {
        const command = new ListTablesCommand({})
        try {
            const results = await this.client.send(command)
            console.log(results.TableNames.join('\n'))
        } catch (err) {
            console.error(err)
        }
    }


    async getItems() {
        const command = new ScanCommand({
            TableName: 'friedrichsen-resume'
        })

        try {
            const results = await this.client.send(command)
            return unmarshall(results.Items[0])
        } catch (err) {
            console.error(err)
        }
    }
}

export default DBClient