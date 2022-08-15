import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./models/product.schema";
import { ProductsService } from './products.service';
import { ProductsController } from './controllers/products.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    ],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule {}
