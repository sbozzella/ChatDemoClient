import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  sendUrl: string;
  receiveUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };
  constructor(private http: HttpClient) {
    this.sendUrl = 'http://localhost:5000/chat/new';
    this.receiveUrl = 'http://localhost:5000/chat/all';
  }

  // Http send Message
  public async sendMessage(message) {
    return await this.http
      .post(this.sendUrl, message, this.httpOptions)
      .toPromise();
  }
  // Http receive Message
  public receiveMessage() {
    return this.http.get(this.receiveUrl).toPromise();
  }
}
