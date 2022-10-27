
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'cip-termino-condicion',
    templateUrl: './termino.condicion.cip.component.html',
    styleUrls: ['./termino.condicion.cip.component.css']
    
  })
  export class TerminoCondicionCipComponent  implements OnInit{  
  
    constructor(private router: Router) {  
    }
  
    ngOnInit(): void {
    }
   
  
}