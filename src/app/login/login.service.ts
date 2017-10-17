import { Injectable } from '@angular/core';
import { HttpUtilsService } from '../../utils/httputils.service';
import { User } from './user';

@Injectable()
export class LoginService {

    constructor(private httpUtilsService : HttpUtilsService) {}

    login(user : User ) {
        return this.httpUtilsService.request({  
            method: 'POST',
            url: 'http://localhost:18080/webportal/api/login',
            data: user,
            dataType: 'json',
            contentType:'application/json;charset=UTF-8'
        });
    }
}