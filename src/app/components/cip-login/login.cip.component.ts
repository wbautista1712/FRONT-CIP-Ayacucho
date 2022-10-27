
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import '../../../assets/js/demo-purpose-only.js';

@Component({
  selector: 'cip-login',
  templateUrl: './login.cip.component.html',
  styleUrls: ['./login.cip.component.css']
  
})
export class LoginCipComponent  implements OnInit{


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }


  btnLogin () {
    console.log("pasa menu");
 
  this.router.navigateByUrl('/menu');

}


}