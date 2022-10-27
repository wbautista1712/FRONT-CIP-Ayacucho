
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'cip-datos-personales',
    templateUrl: './datos.personales.cip.component.html',
    styleUrls: ['./datos.personales.cip.component.css']
    
  })
  export class DatosPersonalesCipComponent  implements OnInit{  
  
    constructor(private router: Router) {  
    }
  
    ngOnInit(): void {
    }
  
  
  
}