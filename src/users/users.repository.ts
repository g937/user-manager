import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersRepository {
  constructor(
      @InjectRepository(UserEntity)
      private usersRepository : Repository<UserEntity>) {}
  
create(createUserDto: CreateUserDto) : Promise<any> {
    return this.usersRepository.save(createUserDto);
  }

  findAll(name?: string) : Promise <UserEntity[]>  {
    if (name != null){
        return this.usersRepository.find({where: {name:name}});
    }
    return this.usersRepository.find();
  }

  findOne(id: number)  : Promise <UserEntity> {
    return this.usersRepository.findOne();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}