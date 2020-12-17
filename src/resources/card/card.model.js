import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
);

cardSchema.index({ list: 1, name: 1 }, { unique: true });

export const Card = mongoose.model('card', cardSchema);
