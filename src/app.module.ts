import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/User';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MyElterasu@3030',
      database: 'practicing_crud',
      entities: [User],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
