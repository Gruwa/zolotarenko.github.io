import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';;
import { 
    Http, 
    Response 
} from '@angular/http';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { Injectable } from '@angular/core';

export interface IProduct {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
}

@Injectable()
export class ProductsService {

    verifyEditForm: boolean = false;
    productsData: IProduct[];
    activeProduct: IProduct;

    constructor(private http: Http,
                private router:Router) {

    }

    public productEditData$ = new Subject<any>();
    public productNewData$ = new Subject<any>();
    public productData$ = new Subject<any>();

    getInitialData() {
        if(localStorage.productsData != undefined) {
            return  this.productsData = JSON.parse(localStorage.productsData);
        } else {
            return this.dataServer('assets/server/data.json').subscribe(data => this.getData(data));
        }
    }
    
    dataServer(dataUrl?: string) {
        return this.http.request(dataUrl)
            .map(res => res.json());
    }

    getData(data?: IProduct[]) {
        localStorage.setItem('productsData', JSON.stringify(data));
        let dataLoacalStorage = localStorage.getItem('productsData');
        this.productsData = JSON.parse(dataLoacalStorage);
    }

    getProductId(id:number) {
        if(this.productsData === undefined) {
            this.router.navigate(['/404']) 
            return;
        } else {
            return this.productsData.find(product => product.id === id);
        }
    }

    // getProductId(id:number) {
    //     let object = this.getInitialData();
    //     for (var key in object) {
            
    //         if (object[key].id === id) {
    //             console.log(object[key]);
    //             return object[key];
    //         } else {
    //             this.router.navigate(['/404']);
    //         }
    //     }

        
    //         // let e = this.productsService.getInitialData().this.productsService.getProductId(+this.activatedRoute.snapshot.params['id'])
    // }

    
    deleteProduct(product: IProduct) {
        this.productsData.splice(this.productsData.indexOf(product), 1);
        this.getData(this.productsData);
    }
    
    editButton(product: IProduct) {
        this.activeProduct = product;          
    }
    
    verifyProduct(verify: boolean) {
        this.verifyEditForm = verify;
    }

    saveEditForm(product: IProduct) {
        product.id = this.activeProduct.id;
        this.productsData.splice(this.productsData.indexOf(this.activeProduct), 1, product);
        this.getData(this.productsData);
    }

    saveCreateForm(product: IProduct) {
        this.productsData = this.getInitialData();
        product.id = this.productsData[this.productsData.length - 1].id + 1;
        this.productsData.push(product);
        this.getData(this.productsData);    
    }

}
