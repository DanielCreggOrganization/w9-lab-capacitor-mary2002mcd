import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor() { }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
  
    console.log(info);
  };
}
