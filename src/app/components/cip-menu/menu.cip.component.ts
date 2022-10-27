

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';




// import '../../../assets/vendors/popperjs/popper.min.js';
import '../../../assets/vendors/bootstrap/bootstrap.min.js';
import '../../../assets/js/nifty.js';
import '../../../assets/js/demo-purpose-only.js';
import '../../../assets/vendors/chart.js/chart.min.js';
import '../../../assets/pages/dashboard-1.js';
import '../../../assets/pages/dashboard-2.js';
import { AyudaCipComponent } from '../cip-ayuda/ayuda.cip.component.js';


@Component({
  selector: 'cip-menu',
  templateUrl: './menu.cip.component.html',
  styleUrls: ['./menu.cip.component.css']
  
})
export class MenuCipComponent {
  @ViewChild('AyudaCipComponent') ayuda !: AyudaCipComponent;
  constructor( private location: Location , private router: Router){}

  cerrarSession()
  {
   // this.location.back();
    console.log( 'cierra()...' );
    this.router.navigateByUrl('/login');
  }

  viewAyuda()
  {
   // this.location.back();
    console.log( 'ver ayudsa()...' );
  //this.router.navigateByUrl('/ayuda');
  //this.ayuda.ngOnInit;
  }
}