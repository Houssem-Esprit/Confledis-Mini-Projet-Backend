import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  @IsNumber()
  prixUnitaire: number;

  @IsNotEmpty()
  @IsNumber()
  quantite: number;
}
