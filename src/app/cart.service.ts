import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'fm_cart_v1';
  private items$ = new BehaviorSubject<Product[]>(this.load());

  get cart$() { return this.items$.asObservable(); }
  get snapshot() { return this.items$.value; }

  private save(items: Product[]) {
    try { localStorage.setItem(this.storageKey, JSON.stringify(items)); } catch {}
    this.items$.next(items);
  }

  private load(): Product[] {
    try { return JSON.parse(localStorage.getItem(this.storageKey) || '[]'); } catch { return []; }
  }

  add(product: Product) {
    const next = [...this.items$.value, product];
    this.save(next);
  }

  remove(index: number) {
    const cur = [...this.items$.value];
    cur.splice(index, 1);
    this.save(cur);
  }

  clear() {
    this.save([]);
  }

  total() {
    return this.items$.value.reduce((s, p) => s + (p.price || 0), 0);
  }
}
