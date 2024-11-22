import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkInfoService } from '../services/network-info.service';
import { TextToSpeechService } from '../services/text-to-speech.service';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
defineCustomElements(window);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  
})
export class HomePage {
  capturedImage: any;
  

  constructor(private cameraService: CameraService, private locationService: LocationService,
    private deviceInfoService: DeviceInfoService, private networkInfoService: NetworkInfoService,
    private textToSpeechService: TextToSpeechService
  ) {}

  async takePicture() {
    this.capturedImage = await this.cameraService.takePicture();
  }

  async getLocation() {
    const location = await this.locationService.getCurrentPosition();
    console.log(location);
  }

  async getDeviceInfo() {
    const info = await this.deviceInfoService.logDeviceInfo();
    console.log(info);
  }

  async getNetworkInfo() {
    const networkInfo = await this.networkInfoService.logCurrentNetworkStatus();
    console.log(networkInfo);
  }

  async speakText(text: string) {
    await this.textToSpeechService.speak(text);
    console.log(text);
  }
}