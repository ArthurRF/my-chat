import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface ICreateMessageParams {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
export class CreateMessageService {

  async execute({
    to,
    text,
    roomId
  }: ICreateMessageParams) {
    const message = await Message.create({
      to,
      text,
      roomId
    });

    return message;
  }
}