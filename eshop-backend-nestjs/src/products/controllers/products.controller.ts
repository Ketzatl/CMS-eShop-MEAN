import {Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {ProductsService} from "../products.service";
import {CreateProductDto} from "../dto/create-product.dto";
import {RequestsInformationsInterceptor} from "../../interceptors/requests-informations.interceptor";
import {UpdateProductDto} from "../dto/update-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    // @UseInterceptors(RequestsInformationsInterceptor)
    async createArticle(@Body() createProductDto: CreateProductDto) {
        console.log('createProductDto', createProductDto);
        return this.productsService.create(createProductDto);
    }

    @Get()
     // @UseInterceptors(RequestsInformationsInterceptor)
    async findAll() {
        return this.productsService.findAll();
    }

    @Delete(':id')
    // @UseInterceptors(RequestsInformationsInterceptor)
    async deleteProduct(@Param('id') id: string) {
        return this.productsService.delete(id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() product:  UpdateProductDto) {
        // console.log('id', id);
        // console.log('product', product);
        return this.productsService.update(id, product);
    }
}
