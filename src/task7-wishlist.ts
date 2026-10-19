import { Book } from './task1-types';
import { BookCatalog } from './task6-classes';

export class Wishlist {
  private favoriteIds: string[];

  constructor(favoriteIds: string[] = []) {
    this.favoriteIds = [...new Set(favoriteIds)];
  }
  has(id: string): boolean {
    return this.favoriteIds.includes(id);
  }
  get count(): number {
    return this.favoriteIds.length;
  }
   getFavorites(catalog: BookCatalog): Book[] {
    return catalog.getBooks().filter((book) => this.has(book.id));
  }
  getFavoriteIds(): string[] {
    return [...this.favoriteIds];
  }
  toggle(id: string): void {
    if (this.has(id)) {
      this.favoriteIds = this.favoriteIds.filter((favId) => favId !== id);
    } else {
      this.favoriteIds = [...this.favoriteIds, id];
    }
  }
}