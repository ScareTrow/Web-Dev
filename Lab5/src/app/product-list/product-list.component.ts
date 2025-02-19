import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;
  searchInput: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryIdFromRoute = Number(params.get('categoryId'));
      this.products = products.filter(product => product.categoryId === categoryIdFromRoute);
    });
  }

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }

  share(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  sharetg(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const whatsappLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  nextImage(product: Product) {
    if (product.img.length > 1) {
      product.currentImageIndex = (product.currentImageIndex + 1) % product.img.length;
    }
  }
  like(product: Product) {
    product.likes++;
  }
  prevImage(product: Product) {
    if (product.img.length > 1) {
      product.currentImageIndex =
        (product.currentImageIndex - 1 + product.img.length) % product.img.length;
    }
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  delete(product: Product) {
    const index = this.products.indexOf(product);

    if (index !== -1) {
      this.products.splice(index, 1);
      window.alert('Product has been deleted');
    } else {
      window.alert('Product not found');
    }
  }
}
