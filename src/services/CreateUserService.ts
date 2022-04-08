import { injectable } from "tsyringe";
import { User } from "../schemas/User";


interface ICreateUserParams {
  email: string;
  socketId: string;
  avatar: string;
  name: string;
}

@injectable()
export class CreateUserService {

  async execute({
    avatar,
    email,
    name,
    socketId
  }: ICreateUserParams) {
    const userAlreadyExists = await User.findOne({
      email
    }).exec();

    if(userAlreadyExists) {
      const user = await User.findOneAndUpdate({
        _id: userAlreadyExists._id
      }, {
        $set: {
          socketId,
          avatar: !!avatar ? avatar : userAlreadyExists.avatar,
          name: !!name ? name : userAlreadyExists.name
        }
      }, {
        new: true,
      });

      return user;
    } else {
      const user = await User.create({
        email,
        socketId,
        avatar,
        name
      });

      return user;
    }
  }
}