import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import DBClient from './util/db_client';
import Config from './config/config';

const resume: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(`Environment is ${Config.env}`)
  const client = new DBClient()
  const data = await client.getItems()
  data.buildVersion = process.env.BUILD_VERSION || 'local-dev'
  return formatJSONResponse(data)
}

export const main = middyfy(resume);
