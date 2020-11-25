import mongoose, { Schema } from 'mongoose';

const YearsSchema = new Schema({
  year: { type: String, required: false },
});

export default mongoose.models.Years
  || mongoose.model('Years', YearsSchema);
