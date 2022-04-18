import { Controller, Get } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @ApiTags('health')
  @Get('/health')
  @ApiOkResponse({ description: 'App is working fine'})
  @ApiBadGatewayResponse({ description: 'Something went wrong.'})
  getHello(): object {
    return this.appService.getHello();
  }
}
