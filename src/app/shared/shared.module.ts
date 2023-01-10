import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { WoodenHeaderComponent } from './wooden-header/wooden-header.component';
import { WoodenCarouselComponent } from './wooden-carousel/wooden-carousel.component';
import { WoodenUsComponent } from './wooden-us/wooden-us.component';
import { WoodenGalleryComponent } from './wooden-gallery/wooden-gallery.component';
import { WoodenFooterComponent } from './wooden-footer/wooden-footer.component';



@NgModule({
  declarations: [
    WoodenHeaderComponent,
    WoodenCarouselComponent,
    WoodenUsComponent,
    WoodenGalleryComponent,
    WoodenFooterComponent,

  ],
  exports:[
    WoodenHeaderComponent,
    WoodenCarouselComponent,
    WoodenUsComponent,
    WoodenGalleryComponent,
    WoodenFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
