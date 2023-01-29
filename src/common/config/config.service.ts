/* eslint-disable prettier/prettier */
import { parse } from 'dotenv';
import { existsSync, readFileSync } from 'fs';

interface EnvConfig {
  [prop: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;
  private readonly filePath = `.env`;
  private readonly isProduction;
  private readonly isDevelopment;

  constructor() {
    this.envConfig = !existsSync(this.filePath)
      ? process.env
      : parse(readFileSync(this.filePath, 'utf-8'));
    this.isProduction = this.envConfig.NODE_ENV == 'production';
    this.isDevelopment = this.envConfig.NODE_ENV == 'development';
  }

  get app(): any {
    return {
      appPort: parseInt(this.envConfig.APP_PORT),
      appHostServer:
        this.isProduction || this.isDevelopment
          ? this.envConfig.APP_HOST_SERVER
          : `${this.envConfig.APP_HOST_SERVER}:${this.envConfig.APP_PORT}`,
      appHostClient: this.envConfig.APP_HOST_CLIENT,
      appUrlPrefix: this.envConfig.APP_URL_PREFIX,
      jwtKey: this.envConfig.JWT_KEY,
      jwtExpires: 3600,
    };
  }

  get env(): string {
    return process.env.NODE_ENV || 'local';
  }

  // get sendgrid(): any {
  //  return {
  //  apiKey: this.envConfig.SENDGRID_API_KEY,
  // };
  //}

  get jwt(): string {
    return 'password';
  }

  get orm_config(): any {
    return {
      type: this.envConfig.DB_TYPE,
      host: this.envConfig.DB_HOST,
      port: this.envConfig.DB_PORT,
      username: this.envConfig.DB_USERNAME,
      password: this.envConfig.DB_PASSWORD,
      database: this.envConfig.DB_DATABASE,
      synchronize: true,
      logging: true,
      ssl: this.isProduction || this.isDevelopment,
      entities: [
        this.isProduction || this.isDevelopment ? 'src/entities/*.ts' : 'dist/entities/*.js',
      ],
    };
  }
}

export default new ConfigService();
export const InstanceConfigService = new ConfigService();