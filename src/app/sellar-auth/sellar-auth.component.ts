import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../datatype';

@Component({
  selector: 'app-sellar-auth',
  templateUrl: './sellar-auth.component.html',
  styleUrls: ['./sellar-auth.component.css']
})
export class SellarAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
  }

  signUp(data: SignUp):void{
    console.warn(data)
    this.seller.userSignUp(data)
    //.subscribe((result)=>{
        // console.warn(result)
       /* if(result){
          this.router.navigate(['seller-home'])
        }*/
   // });
  }

}
