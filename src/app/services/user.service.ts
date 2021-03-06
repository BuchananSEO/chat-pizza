import { Injectable } from '@angular/core';
import { from, Observable, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { data } from '../../data/userData';
import { User} from '../models/user';  // Object oriented

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: Observable<User[]>;
  cache: User[][] = [];

  constructor() {
    this.users$ = from([]);
  }

  private getData(page: number, pageSize: number) {
    return data.slice(page * pageSize, page * pageSize + pageSize);
  }

  getUsers(page = 0, pageSize = 100) {
    return timer(this.cache.length === 0 ? 0 : 1000).pipe(
      tap(_ => (this.cache[page] = this.getData(page, pageSize))),
      map(_ => {
        return this.cache.reduce((acc, current) => {
          return acc.concat(current);
        }, []);
      })
    );
  }

  getUser(id: number) {
    return new Observable<User>(subscriber => {
      setTimeout(() => {
        const user = data.find(x => x.id === id);
        subscriber.next(user);
        subscriber.complete();
      }, 0);
    });
  }
}