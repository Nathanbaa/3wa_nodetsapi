export interface createRestaurantInputs {
  name: string;
  ownerName: string;
  foodTypes: [string];
  postalcode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}

export interface LoginRestaurantInputs {
  email: string;
  password: string;
}

export interface restaurantPayload {
  _id: string;
  email: string;
  name: string;
  foodTypes: [string];
}

export interface EditRestaurantInputs {
  name: { type: String; required: true };
  ownerName: { type: String; required: true };
  foodTypes: { type: [String]; default: [] };
  postalcode: { type: String; required: true };
  address: { type: String; required: true };
  phone: { type: String; required: true };
}
