import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Blogs } from './blogs/blogs';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { ThankYou } from './thankyou/thankyou';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'about', component: About },
	{ path: 'blogs', component: Blogs },
	{ path: 'cart-page', component: Cart },
	{ path: 'checkout', component: Checkout },
	{ path: 'thankyou', component: ThankYou },
	{ path: '**', redirectTo: '' }
];
