import { AppMiddlewareFunction } from './../../../core/middlewares/AppMiddleware';
import { Request, Response, NextFunction } from 'express';
import { appRouteValidationError } from './../../../configuration/errors/errorsConfig';
import { UserRouteGetValidator, userRouteGetValidator } from './../../../models/routing/request/UserRouteRequestValidator';
import * as Joi from 'joi';

export class UserRouteValidatorMiddleware {
    private getValidator: UserRouteGetValidator = userRouteGetValidator;
    get: AppMiddlewareFunction = async (req: Request, res: Response, next: NextFunction) => { 
        try {
            await this.getValidator.validateQuery(req.query);
            next();
        } catch(e) {
            res.json(appRouteValidationError.parse(e as Joi.ValidationError).get());
        }
    }
}

export let userRouteValidatorMiddleware = new UserRouteValidatorMiddleware();