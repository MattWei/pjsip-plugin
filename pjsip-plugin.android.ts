import { Common } from './pjsip-plugin.common';

import * as application from 'application';
declare const com: any;

export class PjsipPlugin extends Common {
    private sipManager: any;

    constructor() {
        super();
        const context = application.android.context;
        this.sipManager = new com.honeywell.libpjsip.SipManager(5060);
        //this.sipManager.libCreate();
      }
}