import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

// import './config/dotenv.config'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  // const configService = app.get(ConfigService)
  // const port = configService.get('PORT')

  await app.listen(3334)
}
bootstrap()
