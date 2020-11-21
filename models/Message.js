import mongoose, { Schema } from 'mongoose'

const MessageSchema = new Schema({
  message: { type: String, required: false }
})


export default mongoose.models.Message ||
  mongoose.model('Message', MessageSchema)