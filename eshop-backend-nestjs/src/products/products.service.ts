import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CreateProductDto} from "./dto/create-product.dto";
import { Model } from 'mongoose';
import {Product} from "./interfaces/product.interface";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async create(createProductDto: CreateProductDto): Promise<Product>{
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    /* Permet de récupérer tous les produits en DB,
    du plus récent au plus ancien (date de création) */
    async findAll(): Promise<Product[]> {
        return (this.productModel
            .find()
            .sort({ creationDate: -1 })
            .exec());
    }

    async delete(productId: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(productId);
    }

    async update(id: string, article: UpdateProductDto) {
        const updatedArticle = this.productModel.findByIdAndUpdate(id, article, { new: true });
        console.log(updatedArticle);
        return updatedArticle;
    }
}
