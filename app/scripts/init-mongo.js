db.createUser({
    user: 'app_reader',
    pwd: 'password',
    roles: [
        {
            role: 'readWrite',
            db: 'resume_data',
        },
    ],
});

db = new Mongo().getDB("resume_data");


db.createCollection('resume_data', { capped: false });
