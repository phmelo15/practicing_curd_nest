import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/createUserData.dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.AuthService.createUser(userData);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.AuthService.getUser(id);
  }
}
