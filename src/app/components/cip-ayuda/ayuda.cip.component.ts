
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'cip-ayuda',
    templateUrl: './ayuda.cip.component.html',
    styleUrls: ['./ayuda.cip.component.css']
    
  })
  export class AyudaCipComponent  implements OnInit{  
  
    constructor(private router: Router) {  
    }
  
    ngOnInit(): void {
    }
  
  
  
}