import mongoose, {Document, Schema} from 'mongoose';

type Message = Document & {
  to: string;
  text: string;
  createdAt: Date;
  roomId: string;
}

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  text: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  roomId: {
    type: String,
    ref: 'ChatRoom'
  },
});

const Message = mongoose.model<Message>('Messages', MessageSchema);

export { Message };