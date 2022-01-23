import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository : UsersRepository ) {}
    
    create(createUserDto: CreateUserDto) : Promise<any>{
    return this.usersRepository.create(createUserDto);
  }

  findAll(name?: string) : Promise <UserEntity[]>{
    return this.usersRepository.findAll(name);
  }

  findOne(id: number) : Promise <UserEntity> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
