import mongoose from 'mongoose';
const message = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
      timestamps: true
  });
  const Message = mongoose.model('MESSAGE', productSchema);

  export default Message;