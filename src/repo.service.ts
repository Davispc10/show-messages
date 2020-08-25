import { Repository } from 'typeorm'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import Message from './database/models/message.entity'
import User from './database/models/user.entity'

@Injectable()
class RepoService {
  public constructor (
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Message) public readonly messageRepo: Repository<Message>
  ) {}
}

export default RepoService
