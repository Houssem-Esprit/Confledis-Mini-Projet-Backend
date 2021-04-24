import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entity/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.addProduct(createProductDto);
  }

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }

  async deleteProduct(id: number): Promise<void> {
    return await this.productRepository.deleteProduct(id);
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productRepository.updateProduct(id, updateProductDto);
  }
}
