import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//import geolocation, view child & element ref for map

//global var for google ref
declare var google;

@Component({
  selector: 'page-list',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;

  //map of type any
  map: any;

  //pass geolocation to constructor
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  //ionic function calls load map
  ionViewDidLoad()
  {
    this.loadMap();
  }

  loadMap()
  {
    this.geolocation.getCurrentPosition().then((position) => 
    {
      //call google method
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      //set map type options
      let option =
      {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      //assign map to google call
      this.map = new google.maps.Map(this.mapElement.nativeElement, option);
  
    },
  (err) => 
  {
    //error handler
    console.log(err);
  });
    
  }

  //add marker function adds marker to map
  addMarker()
  {
    //set based upon google docs
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>My point of Interest!</h4>";

    //call function
    this.addInfoWindow(marker, content);
  }

  //google info window for marker on map
  addInfoWindow(marker, content)
  {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    })
  }//info window

}
