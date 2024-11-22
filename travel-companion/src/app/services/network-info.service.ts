import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';


Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

@Injectable({
  providedIn: 'root'
})

export class NetworkInfoService {

  constructor() { }

  
  
  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log('Network status:', status);
  };
}
