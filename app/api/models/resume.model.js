const mongoose = require('mongoose');
const httpStatus = require('http-status');
//const { omitBy, isNil } = require('lodash');
const moment = require('moment-timezone');
const uuidv4 = require('uuid/v4');
const APIError = require('../utils/APIError');
const Schema = mongoose.Schema;
/**
 * User Schema
 * @private
 */
const ResumeSchema = new Schema({

    user_name: {
        type: String,
        required: true
    },
    socialmedia: {
            iconName: {type: String},
            url: { type: String }
    },
    sections: {
        experience: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }

        },
        education: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }
        },
        projects: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }
        },
        skillbars: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }
        },
        leadership: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }
        },
        activities: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object
            }
        }
    },

    },{collection: 'resume_data'});
/**
 * Methods
 */


/**
 * Statics
 */
ResumeSchema.statics = {
    async getbyName(name) {
        try {
      //      const resume = await
      //      ResumeSchema.find({user_name: name}).exec();
      //      console.log(resume);
        } catch (error) {
            console.log(error);
        }
}
}
module.exports = mongoose.model('resume_data', ResumeSchema);