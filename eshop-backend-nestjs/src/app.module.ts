import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from './products/products.module';
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import config from "./config";

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot(config.mongoUri, {useNewUrlParser: true}),
        UsersModule,
        AuthModule,
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
