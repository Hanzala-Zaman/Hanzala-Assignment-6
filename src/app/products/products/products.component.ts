import { Component, Output } from '@angular/core';
import { ProductsdataService } from 'src/app/productsdata.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  
  enteredPrice: any;

  tempproducts: any[] = [];
  filteredProducts: any[] = [];
  
  registerForm = new FormGroup({
    idToDelete: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    cat_id: new FormControl(''),
    ven_id: new FormControl(''),
    selectedCategory: new FormControl(''),
    selectedvendor: new FormControl('') 
  });

  submittedData: any;
  idToDelete:any;
  showAddForm: boolean = false;
  showDelForm: boolean = false;
  showdelFormName: boolean =false;
  tempcategory: any;
  tempvendors: any;
  showcatProd: boolean = false;
  showvenProd: boolean = false;
  showProdById: boolean = false;
  showModal: boolean = false;
  selectedCategoryId: string | null | undefined;
  selectedVendorId: string | null | undefined;
  constructor(public prodData: ProductsdataService, private formBuilder: FormBuilder)
  {
  this.registerForm = this.formBuilder.group({
    idToDelete: [''],
    id: [''],
    name: [''],
    price: [''],
    cat_id: [''],
    ven_id: [''],
    selectedCategory: [''],
    selectedvendor:  ['']
  });
}

ngOnInit() {
  
  this.tempproducts = this.prodData.products;
  this.tempcategory = this.prodData.categories;
  this.tempvendors = this.prodData.vendors;

  console.log('tempproducts:', this.tempproducts);
  console.log('tempcategory:', this.tempcategory);
  console.log('tempvendors:', this.tempvendors);
}

formAddShow()
{
  this.showAddForm = ! this.showAddForm;
}

addProduct() {
  this.submittedData = this.registerForm.value;

  const randomId = Math.floor(Math.random() * 100).toString();

  this.submittedData.id = randomId;
  
  console.log(this.submittedData);
  
  this.prodData.addProduct(this.submittedData);
  
  this.registerForm.reset();
  this.showAddForm = false;
} 

formByIdShow() {
  this.showDelForm = !this.showDelForm;
  this.idToDelete = ''; 
}

delById() {
  
  this.idToDelete = this.registerForm.value.idToDelete;

  const index = this.tempproducts.findIndex(product => product.id === this.idToDelete);

  if (index !== -1) {

    this.tempproducts.splice(index, 1);
  }

  this.idToDelete = ''; 
  this.showDelForm = false;
}

formBynameShow() {
  this.showdelFormName = !this.showdelFormName;
}

delByName() {
  const nameToDelete = this.registerForm.value.idToDelete; 

  for (let i = this.tempproducts.length - 1; i >= 0; i--) {
    if (this.tempproducts[i].name === nameToDelete) {
      this.tempproducts.splice(i, 1);
    }
  }

  this.showdelFormName = false;
}


formCatProdShow() {
  this.showcatProd = !this.showcatProd;
}

showcatProducts() {
  this.selectedCategoryId = this.registerForm.value.selectedCategory;
  this.filteredProducts = this.tempproducts.filter(product => product.cat_id === this.selectedCategoryId);
  if (this.filteredProducts.length === 0) 
  {
    alert("No product found");
  }
}

formVendorProdShow() {
  this.showvenProd = !this.showvenProd;
}

showVendorProducts() 
{
  this.selectedVendorId = this.registerForm.value.selectedvendor;
  this.filteredProducts = this.tempproducts.filter(product => product.ven_id === this.selectedVendorId);
  if (this.filteredProducts.length === 0) 
  {
    alert("No product found");
  }
}

formProbById()
{
  this.showProdById = !this.showProdById;
}
showProdByProdId()
{
  const productIdToFind = this.registerForm.value.id;
  const foundProduct = this.tempproducts.find(product => product.id === productIdToFind);

  if (foundProduct) {
    this.filteredProducts = [foundProduct]; 
  } else {
    alert('Enter a valid product ID.'); 
    this.filteredProducts = []; 
  }

 
}

closeProductsModal()
{
  this.showAddForm = false; 
}
closeProdIdModal()
{
  this.showDelForm = false;
}

closeProdNameModal()
{
  this.showdelFormName = false;
}
closeCatProdModal()
{
  this.showcatProd = false;
}
closeVenProdModal()
{
  this.showvenProd = false;
}
closeGetProdIdModal()
{
  this.showProdById = false;
}

  openModal() 
  {
    this.showModal = !this.showModal;
  }

  cheapProducts() 
  {
    this.filteredProducts = this.tempproducts.filter(product => product.price <= this.enteredPrice);
  }

  closeModal() 
  {
    this.showModal = false;
    this.filteredProducts = []; 
  }

}



