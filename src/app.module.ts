import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistryController } from './controllers/registry.controller';
import { AppService } from './app.service';
import { RegistryService } from './services/registry.service';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
  ],
  controllers: [AppController, RegistryController],
  providers: [AppService, RegistryService],
})
export class AppModule {}
