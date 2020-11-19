import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: Message[];
  public message = new Message();
  constructor(
    public chatService: ChatService
  ) { }

  async ngOnInit() {
    await this.chatService.receiveMessage().then(x => this.messages = x as Message[]);
  }

   async sendMessage() {
    delete this.message.id;
    delete this.message.createdAt;
    await this.chatService.sendMessage(this.message);
    await this.chatService.receiveMessage().then(x => this.messages = x as Message[]);
    this.message.text = '';
  }

}
