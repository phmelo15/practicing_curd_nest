import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { createUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  async createUser(userData: createUserParams) {
    const createdAt = new Date();

    const user = this.UserRepository.create({
      ...userData,
      createdAt,
    });
    return this.UserRepository.save(user);
  }

  async getUser(id: number) {
    const user = await this.UserRepository.findOne({ where: { id } });
    return user;
  }
}
