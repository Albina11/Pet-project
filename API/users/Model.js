import mongoose from'mongoose'
import userSchema from './userSchema.js'

const UserModal = mongoose.model("User", userSchema);

export default UserModal;