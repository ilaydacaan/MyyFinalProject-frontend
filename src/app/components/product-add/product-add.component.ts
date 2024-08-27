import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, 
              private productService:ProductService,
            private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createProductAddFrom();
    
  }
  createProductAddFrom(){
    this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add(){
    if(this.productAddForm.valid){
      debugger;
      let productModel=Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{     
        this.toastrService.success(response.message,"Başarılar")
      },responseError=>{
        if(responseError.error.Errors.lenght>0){
          for (let i = 0; i <responseError.error.Errors.lenght; i++) {        
             this.toastrService.error(responseError.error.Errors[i].ErrorMessage,
             "Doğrulama hatası") 
          }        
        }      
      })
      
    }else{
        this.toastrService.error("Formunuz eksik","Dikkat")
    }
   

  }

}
