import { injectable } from "tsyringe";
import { ObjectId } from 'mongoose';
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
export class GetChatRoomByUsersService {

  async execute(idUsers: ObjectId[]) {
    const chatRoom = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers
      }
    }).exec();

    return chatRoom;
  }
}