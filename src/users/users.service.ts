import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,
    private dataSource: DataSource
  ) {}

  create(user: Partial<Users>) {
    const newUser = this.usersRepo.create(user);
    return this.usersRepo.save(newUser);
  }

  async findAll() {
    return this.usersRepo.find();
    // const queryRunner = this.dataSource.createQueryRunner();
    // const tables = await queryRunner.getTables();
    // await queryRunner.release();
    // return tables;
  }

}