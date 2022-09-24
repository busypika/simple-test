import { Injectable } from '@nestjs/common';
import { Message } from '@cors-test/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Congrats 🎉' };
  }
}
