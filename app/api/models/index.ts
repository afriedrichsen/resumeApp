import mongoose, { Mongoose, MongooseDocument, Model }  from 'mongoose'

import { defineResume, ResumeAttributes, ResumeInstance } from './resume.model'

export interface DbConnection {
    mongoose: Mongoose
    Resume: Model<ResumeInstance>
}

export default function setupModels(
    mongoose: Mongoose
  ): DbConnection {
    const connection: DbConnection = {
      mongoose: mongoose,
      Resume: defineResume(mongoose),
    }
  
    // create associations after all object types are defined
    // associateAdminUser(connection)
  
    return connection
  }
  