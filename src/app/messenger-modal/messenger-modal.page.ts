import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-messenger-modal',
  templateUrl: './messenger-modal.page.html',
  styleUrls: ['./messenger-modal.page.scss'],
})
export class MessengerModalPage implements OnInit {

  @Input() description: string;
  @Input() uiComps: UIComponent[];
  @Input() nativeFeatures: NativeFeature[];

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}

class UIComponent {
  name: string;
  icon: string;
  tag: string;
  description: string;
}

class NativeFeature {
  name: string;
  icon: string;
  runtime: string;
  description: string;
}