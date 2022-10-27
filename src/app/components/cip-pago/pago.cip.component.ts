
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'cip-pago',
    templateUrl: './pago.cip.component.html',
    styleUrls: ['./pago.cip.component.css']
    
  })
  export class PagoCipComponent  implements OnInit{  
  
    constructor(private router: Router) {  
    }
  
    ngOnInit(): void {
    }
  
  
  
}