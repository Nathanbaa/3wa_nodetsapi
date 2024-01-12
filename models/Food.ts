import mongoose, { Document, Schema } from "mongoose";

interface FoodDoc extends Document {
  restaurantId: string;
  name: string;
  description: string;
  category: string;
  foodType: string;
  readyTime: number;
  price: number;
  rating: number;
  images: [string];
}

const FoodSchema = new Schema<FoodDoc>(
  {
    restaurantId: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, default: "" },
    category: { type: String },
    foodType: { type: String, require: true },
    readyTime: { type: Number, require: true },
    price: { type: Number, require: true },
    rating: { type: Number, default: 0.0 },
    images: { type: [String], default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret, options) {
        delete ret._v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
  }
);

const Food = mongoose.model<FoodDoc>("food", FoodSchema);

export { Food, FoodDoc };
