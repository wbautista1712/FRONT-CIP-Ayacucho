
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';


import '../../../assets/js/demo-purpose-only.js';

@Component({
  selector: 'cip-recuperar',
  templateUrl: './recuperar.cip.component.html',
  styleUrls: ['./recuperar.cip.component.css']
  
})


export class RecuperarCipComponent {
  constructor(private location: Location ){}

  goBackLogin()
  {
    this.location.back();
    console.log( 'goBack()...' );
  }
}