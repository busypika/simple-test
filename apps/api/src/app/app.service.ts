import { Injectable } from '@nestjs/common';
import { Message } from '@simple-test/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Congrats 🎉' };
  }
}
