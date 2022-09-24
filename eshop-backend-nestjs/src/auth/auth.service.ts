import {Injectable, NotFoundException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {ReadUserDto} from "../users/dto/read-user.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly  jwtService: JwtService,
            ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneUser(username);
        if(user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(readUserDto: ReadUserDto) {
        // ####  Change password here, to change ADMIN  ####
        // ####  >>  Add new(s) email(s) in "adminArray ####
        let adminArray: string[] = ['tukho@sadhill.com', 'admin@test.com'];
        const foundUser = await this.userService.findOneUser(readUserDto.email);
        if (!foundUser) {
            return new NotFoundException();
        }
        if (foundUser.password !== readUserDto.password) {
            throw  new NotFoundException();
        }
        const payload = {
            createdAt: new Date().toISOString(),
            sub: foundUser._id,
            role: '',
        };
        // if (foundUser.email === 'tukho@sadhill.com') {
        if (adminArray.includes(foundUser.email)) {
            payload.role = 'admin';
        } else {
            payload.role = 'user';
        }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
