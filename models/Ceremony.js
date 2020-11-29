import mongoose, { Schema } from 'mongoose';

const CeremonySchema = new Schema({
  ceremony: { type: String, required: false },
  photos:
    [{
      year: { type: String, required: false },
      image: { type: String, required: false },
      alt: { type: String, required: false },
    }],
});

export default mongoose.models.Ceremony
  || mongoose.model('Ceremony', CeremonySchema);
