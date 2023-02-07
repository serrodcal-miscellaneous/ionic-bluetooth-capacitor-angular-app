import { Component } from '@angular/core';

import { BleClient, numberToUUID } from '@capacitor-community/bluetooth-le';

const HEART_RATE_SERVICE = numberToUUID(0x180d);

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    BleClient.initialize();
    BleClient.requestLEScan(
      {
        services: [HEART_RATE_SERVICE],
      },
      (result) => {
        console.log('received new scan result', result);
      }
    );
  }

}
