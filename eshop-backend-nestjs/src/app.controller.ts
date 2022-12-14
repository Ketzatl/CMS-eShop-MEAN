import {Controller, Get, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {RequestsInformationsInterceptor} from "./interceptors/requests-informations.interceptor";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //
  getHello(): string {
    return this.appService.getHello();
  }
}
