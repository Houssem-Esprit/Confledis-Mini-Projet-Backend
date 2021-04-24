import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'confledis',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // this option meant for dev mode while executing on mode prod this option must be deleted.
};
