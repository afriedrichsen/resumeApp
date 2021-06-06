import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const resume: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    // message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    message: 'We are go!',
    event,
  });
}

export const main = middyfy(resume);
