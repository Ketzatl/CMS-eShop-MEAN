import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = 3000;
    app.enableCors();
    // app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
        .setTitle('eShop Momo API')
        .setDescription('API NestJS exercice with fake eShop')
        .setVersion('1.0.0')
        .build();

    // @ts-ignore
    const document = SwaggerModule.createDocument(app, options);
    // @ts-ignore
    SwaggerModule.setup('api', app, document);

    await app.listen(port);

    console.log("\x1b[33m%s\x1b[0m", "\n\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<"); // yellow text
    console.log(`\t >> App listening on port ${port} <<`);
    console.log("\x1b[33m%s\x1b[0m", "\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<< \n"); // yellow text

}

bootstrap();


