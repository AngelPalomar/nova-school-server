import * as mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }
});

export type Role = mongoose.InferSchemaType<typeof RoleSchema>;
export const Role = mongoose.model('Role', RoleSchema);