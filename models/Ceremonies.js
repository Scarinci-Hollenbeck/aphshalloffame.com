import mongoose, { Schema } from 'mongoose';

const CeremoniesSchema = new Schema({
  ceremony: { type: String, required: false },
  photos:
    [{
      year: { type: String, required: false },
      image: { type: String, required: false },
      alt: { type: String, required: false },
      width: { type: String, required: false },
      height: { type: String, required: false },
    }],
});

export default mongoose.models.Ceremonies
  || mongoose.model('Ceremonies', CeremoniesSchema);
