import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  image: string = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private camera: Camera,
              private base64ToGallery: Base64ToGallery) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
        this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
          res => console.log('Saved image to gallery ', res),
          err => console.log('Error saving image to gallery ', err)
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

}
