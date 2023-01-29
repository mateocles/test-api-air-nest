import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { CryptoService } from './util/cryptp.service';

@Global()
@Module({
  providers: [ConfigService, CryptoService],
  exports: [ConfigService, CryptoService],
})
export class CommonModule {}
