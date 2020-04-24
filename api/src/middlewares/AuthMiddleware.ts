import {IMiddleware, Middleware, Next, Req, Res} from '@tsed/common';
import {Unauthorized} from "ts-httpexceptions";
import {ApplicationContext} from '../ApplicationContext';
import AuthService from '../services/AuthService';

@Middleware()
class AuthMiddleware implements IMiddleware {

    constructor(private authService: AuthService) {
    }

    async use(@Req() req: Req, @Res() res: Res, @Next() next: Next) {
        let token = req.header("X-AUTH-TOKEN");

        if (!token) {
            return next(new Unauthorized("Token not provided."));
        }

        token = token.split("Bearer ")[1];

        try {
            ApplicationContext.usuario = await this.authService.decodificarToken(token);
        } catch (e) {
            return next(new Unauthorized("Token not valid."));
        }

        next();
    }

}

export {AuthMiddleware}
