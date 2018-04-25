import { AppError } from './AppError';

export class AppGeneralError extends AppError {
    
    protected code = 1000;
    protected message = "unexpected_error";
}

export let appGeneralError = new AppGeneralError();