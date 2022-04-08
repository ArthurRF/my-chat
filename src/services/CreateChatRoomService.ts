import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";
import { User } from "../schemas/User";

@injectable()
export class CreateChatRoomService {

  async execute(idUsers: string[]) {
    const chatRoom = await ChatRoom.create({
      idUsers
    });

    return chatRoom;
  }
}