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
        type: Object
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
ResumeSchema.method({
    transform() {
        const transformed = {};
        const fields = ['id', 'name', 'email', 'picture', 'role', 'createdAt'];

        fields.forEach((field) => {
            transformed[field] = this[field];
    });

        return transformed;
    }
});
/**
 * Statics
 */
ResumeSchema.statics = {
    async getbyName(name) {
    try {
        let user;

        if (name) {
            user = await this.find({user_name: name}).exec();
            console.log(user);
        }
        if (user) {
            return user;
        }


    } catch (error) {
        throw error;
    }
}
}
module.exports = mongoose.model('resume_data', ResumeSchema);