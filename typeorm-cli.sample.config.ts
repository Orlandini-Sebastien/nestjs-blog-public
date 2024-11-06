import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres est le plus simple',
  password: 'le password',
  database: 'nestjs-blog-par-example',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
