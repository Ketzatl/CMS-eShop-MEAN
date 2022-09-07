import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";
import {JwtModule} from "@nestjs/jwt";
import config from "../config";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: config.secretKey,
    signOptions: { expiresIn: '120s'},

  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
