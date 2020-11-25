import mongoose, { Schema } from 'mongoose'

const MembersSchema = new Schema({
  name: { type: String, required: false },
  class: { type: String, required: false },
  inducted: { type: String, required: false },
  biography: { type: String, required: false },
  image: { type: String, required: false },
})

export default mongoose.models.Members ||
  mongoose.model('Members', MembersSchema)
