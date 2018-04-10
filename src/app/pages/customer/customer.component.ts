import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
	
	users : any = [{name :"Amruta" , address : "rahatani" , email : "amrutankhate9008@gmail.com" , contact: "8793679225", _id:1}]

  constructor() { }

  ngOnInit() {
  }

}
