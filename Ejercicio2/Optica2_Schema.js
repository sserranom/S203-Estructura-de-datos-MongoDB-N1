const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    number: { type: Number, required: true },
    floor: { type: Number, required: true },
    door: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
  },
  phone: { type: String, required: true },
  fax: { type: String, required: true },
  NIF: { type: String, required: true },
});

const customerSchema = new Schema({
  name: { type: String, required: true },
  postal_address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  registration_date: { type: Date, required: true },
  recommended_by: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    default: null,
  },
});

const glassesSchema = new Schema({
  brand: { type: String, required: true },
  frame_type: { type: String, required: true },
  frame_color: { type: String, required: true },
  lens_graduation: {
    left: { type: String, required: true },
    right: { type: String, required: true },
  },
  lens_color: {
    left: { type: String, required: true },
    right: { type: String, required: true },
  },
  price: { type: Number, required: true },
  provider_id: { type: Schema.Types.ObjectId, ref: "Provider", required: true },
  buyers: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
});

const saleSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  employee_id: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  glasses_id: { type: Schema.Types.ObjectId, ref: "Glasses", required: true },
  sale_date: { type: Date, required: true },
});

const Provider = mongoose.model("Provider", providerSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Glasses = mongoose.model("Glasses", glassesSchema);
const Sale = mongoose.model("Sale", saleSchema);

module.exports = {
  Provider,
  Customer,
  Glasses,
  Sale,
};
