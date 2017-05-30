import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
    	{
    		path: '',
    		component: MainComponent
    	},
	    {
	    	path: 'main',
	    	component: MainComponent
	    },
	    {
	    	path: 'shop-cart',
	    	component: ShopCartComponent 
	    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
