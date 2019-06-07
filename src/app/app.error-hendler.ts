import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export class ErrorHendler {

    static handlerError(error: Response | any) {
        let errorMensege: string;

        if (error instanceof Response) {
            errorMensege = `Ocorreu um erro ${error.statusText} ao chamar a url ${error.url} do tipo ${error.status}`;
        } else {
            errorMensege = 'Ocorreu um erro desconhecido';
        }
        console.log(errorMensege);

        return Observable.throw(errorMensege);
    }
}