import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {User} from "./interfaces/user.interface";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async findOneUser(email: string): Promise<User> {
        return this.userModel.findOne({email}).exec();
    }

}
