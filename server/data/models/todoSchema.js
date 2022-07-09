import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        default: 'Pending'
    }
});

const todoModel = mongoose.model('todoSchema', todoSchema, 'Tasks');
export { todoSchema, todoModel };
