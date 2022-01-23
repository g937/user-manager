import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
   })  
  ]   
})
export class AppModule {}
