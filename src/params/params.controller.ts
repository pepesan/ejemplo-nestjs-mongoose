import {Controller, Get, Post, Param, HttpCode, Redirect, Query } from "@nestjs/common";
import {ClienteService} from "../cliente/cliente.service";

@Controller('params')
export class ParamsController {
  constructor(private clienteService: ClienteService) {}
  // Redirección
  @Get('/redir')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  // Código de respuesta
  @Get('/codigo')
  @HttpCode(204)
  getCodigo() {
    return 'Devuelve el código HTTP 204';
  }
  @Get('/service')
  @HttpCode(201)
  getService() {
    return this.clienteService.getData();
  }
  // Ruta con parámetro
  @Get('/:id/:name')
  findById(@Param() params) {
    return 'post /params/:id ' + params.id + 'name: ' + params.name;
  }
  // Ruta con parámetro nombrado
  @Post('/:id')
  ModifyById(@Param('id') id: number) {
    return 'post /params/:id ' + id;
  }
}
