import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    tenant: {
        type: String
    },
    client_id: {
        type: String,
        required: true
    },
    connection: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    request_language: {
        type: String,
        required: true,
    },
    patients: [
        {
            gender: {
                type: String,
                required: true
            },
            first_name: {
                type: String,
                required: true
            },
            last_name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true,
            },
            createdAt: {
                type: String,
                required: true
            },
            modifiedAt: {
                type: String
            },
            nature: {
                type: String,
                required: true,
            },
            prescription: {
                type: Boolean,
                required: true,
            },
            doctor: {
                type: String
            },
            availability: {
                type: String,
                required: true
            },
            comment: {
                type: String
            }
        }
    ]
})

const User = mongoose.model('user', userSchema)

export default User