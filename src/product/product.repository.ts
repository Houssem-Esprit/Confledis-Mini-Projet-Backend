import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entity/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getProducts(): Promise<Product[]> {
    return await this.find();
  }

  async findProduct(nom: string): Promise<Product> {
    const product = await this.findOne({ nom });
    if (!product) {
      throw new NotFoundException(`Il exist aucun produit with nom : ${nom}`);
    }
    return product;
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { nom, prixUnitaire, quantite } = createProductDto;
    const product = new Product();
    product.nom = nom;
    product.prixUnitaire = prixUnitaire;
    product.quantite = quantite;
    return await product.save();
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException();
    }
    this.delete(product);
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { nom, prixUnitaire, quantite } = updateProductDto;
    const product = await this.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Il exist aucun produit avec id: ${id}`);
    }
    product.nom = nom != null ? nom : product.nom;
    product.prixUnitaire =
      prixUnitaire != null ? prixUnitaire : product.prixUnitaire;
    product.quantite = quantite != null ? quantite : product.quantite;
    return await product.save();
  }
}
