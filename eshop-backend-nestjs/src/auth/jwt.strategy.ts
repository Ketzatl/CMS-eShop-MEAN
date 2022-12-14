import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt} from "passport-jwt";
import config from "../config";
import {Strategy} from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.secretKey,
            });
    }
    async validate(payload: any) {
        return {
            userId: payload.sub,
            username: payload.username,
        };
    };
}
