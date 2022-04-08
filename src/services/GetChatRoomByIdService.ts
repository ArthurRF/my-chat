import { injectable } from "tsyringe";
import { ObjectId } from 'mongoose';
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
export class GetChatRoomByIdService {

  async execute(idChatRoom: string) {
    const chatRoom = await ChatRoom.findOne({
      idChatRoom
    }).populate('idUsers').exec();

    return chatRoom;
  }
}