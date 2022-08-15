import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
/**
 * Interceptor qui détaille les caractéristiques
 * du client qui fait une requête.
 */
export class RequestsInformationsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const client = { date: new Date().toISOString(), urlRequest: '', ipAdress: '', navigator: ''};
    const request = context.switchToHttp().getRequest();
    client.ipAdress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    client.navigator = request.headers['user-agent'];
    client.urlRequest = `${request.method} ${request.url}`;
    console.log(typeof client)
    console.log('**** client **** : ', client)
    console.log(request.headers);
    return next.handle();
  }
}
