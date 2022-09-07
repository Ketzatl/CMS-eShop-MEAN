import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductSchema} from "../products/models/product.schema";
import {UserSchema} from "./models/user.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
