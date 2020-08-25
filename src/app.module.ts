import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import * as ormOptions from './config/database.config'
import RepoModule from './repo.module'
import MessageResolver from './resolvers/message.resolver'
import UserResolver from './resolvers/user.resolver'

const graphQLImports = [
  UserResolver,
  MessageResolver
]

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [configDatabase]
    // }),
    TypeOrmModule.forRoot(ormOptions),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
