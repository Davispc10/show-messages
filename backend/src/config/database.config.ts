import * as path from 'path'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'davispc10',
  password: 'docker',
  database: 'showmessages',

  migrations: [
    path.resolve(__dirname, '..', 'database', 'migrations', '*')
  ],
  entities: [
    path.resolve(__dirname, '..', 'database', 'models', '*')
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, '..', 'database', 'migrations'),
    entitiesDir: path.resolve(__dirname, '..', 'database', 'models')
  },
  logging: true,
  migrationsRun: true
  // synchronize: true
}

module.exports = options
