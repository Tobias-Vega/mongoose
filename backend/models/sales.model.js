import { Schema, model } from "mongoose";

const saleSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    employeeId: {
        type: Schema.Types.ObjectId, 
        ref: 'employee', 
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }
})

const sales = model('sales', saleSchema);
export { sales }