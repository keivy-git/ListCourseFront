import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageList: string[] = [];

  constructor() { }


addMessage(message: string){
  this.messageList.push(message);
}
}