import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
  ) {}

 async login(loginDto: any) {  
   return {accessToken:"jhKGjkhgJHKNBGyuNGYukiGyhkKnjniuYhNM"}
 }
}