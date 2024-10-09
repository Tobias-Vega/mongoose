import { model, Schema } from "mongoose";

const authSchema = new Schema({
    employeeId: {
        type: Schema.Types.ObjectId, 
        ref: 'employee', 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const auth = model('auth', authSchema);
export { auth };