import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = 3000;
    app.enableCors();
    await app.listen(port);

    app.setGlobalPrefix('api');

    /*const config = new DocumentBuilder()
        .setTitle('eShop MEAN')
        .setDescription('API (Exercice "MEAN" MongoDB ExpressJS Angular NestJS)')
        .setVersion('1.0')
        .build();*/

    // const document = SwaggerModule.createDocument(app, config);
    // SwaggerModule.setup('api', app, document);

    console.log("\x1b[33m%s\x1b[0m", "\n\t >>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<"); // yellow text
    console.log(`\t >>          Server listening on port ${port}           <<`);
    console.log(`\t >> Access API here   :  http://localhost:3000/products`);
    console.log(`\t >> Visit NG App here :  http://localhost:4200       <<`);
    console.log(`\t >> API Documentation :  http://localhost:3000/api   <<`);
    console.log("\x1b[33m%s\x1b[0m", "\t >>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<< \n"); // yellow text
}

bootstrap();


