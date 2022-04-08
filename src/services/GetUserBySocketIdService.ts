import { injectable } from "tsyringe";
import { User } from "../schemas/User";

@injectable()
export class GetUserBySocketIdService {

  async execute(socketId: string) {
    const user = await User.findOne({
      socketId
    });

    return user;
  }
}