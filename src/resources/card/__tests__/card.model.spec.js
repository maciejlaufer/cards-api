import { Card } from '../card.model';
import mongoose from 'mongoose';

describe('Card model', () => {
  describe('schema', () => {
    test('createdBy', () => {
      const createdBy = Card.schema.obj.createdBy;
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      });
    });
  });
});
