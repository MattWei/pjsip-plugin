import {Observable} from 'data/observable';
import {PjsipPlugin} from 'nativescript-pjsip-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private pjsipPlugin: PjsipPlugin;

  constructor() {
    super();

    this.pjsipPlugin = new PjsipPlugin();
    this.message = this.pjsipPlugin.message;
  }
}