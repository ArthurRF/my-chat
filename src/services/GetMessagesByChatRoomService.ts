import { injectable } from "tsyringe";
import { ObjectId } from 'mongoose';
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
export class GetMessagesByChatRoomService {

  async execute(idChatRoom: string) {
    const messages = await ChatRoom.find({
      idChatRoom
    })
    .populate('idUsers')
    .exec();

    return messages;
  }
}