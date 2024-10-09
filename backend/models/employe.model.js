import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateJoined: {
        type: Date,
        required: true
    }
})

const employee = model('employe', employeeSchema);

export { employee }
