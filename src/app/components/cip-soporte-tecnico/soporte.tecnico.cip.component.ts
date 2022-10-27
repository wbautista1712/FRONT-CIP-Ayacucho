
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'cip-soporte-tecnico',
    templateUrl: './soporte.tecnico.cip.component.html',
    styleUrls: ['./soporte.tecnico.cip.component.css']
    
  })
  export class SoporteTecnicoCipComponent  implements OnInit{  
  
    constructor(private router: Router) {  
    }
  
    ngOnInit(): void {
    }
  
  
  
}