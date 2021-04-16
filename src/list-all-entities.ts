import { IsInt, IsNumberString, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
// Uso de la biblioteca https://github.com/typestack/class-validator
export class ListAllEntities {
  //@Transform(value => Number.isNaN(+value) ? 0 : +value)
  //@IsInt()
  @IsNumberString()
  readonly limit: number;
  @IsNumberString()
  readonly page: number;
}
