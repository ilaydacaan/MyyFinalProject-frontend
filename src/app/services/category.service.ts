import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
apiUrl="https://localhost:7213/api/categories/getall"

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    this.httpClient
     return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
     
  }
}
