import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/addProduct')
  @UsePipes(ValidationPipe)
  async addProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.addProduct(createProductDto);
  }

  @Get('/getProducts')
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async updateProduct(
    @Param('id')
    id: number,
    @Body()
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete('/delete/:id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return await this.productService.deleteProduct(id);
  }
}
