import {Injectable, NotFoundException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {ReadUserDto} from "../users/dto/read-user.dto";

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneUser(username);
        if(user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    login(readUserDto: ReadUserDto) {
        const foundUser = this.userService.findOneUser(readUserDto.email);
        if (!foundUser) {
            return new NotFoundException();
        }
        return foundUser;
    }
}
