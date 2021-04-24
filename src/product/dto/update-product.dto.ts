import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty()
  nom: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  prixUnitaire: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  quantite: number;
}
