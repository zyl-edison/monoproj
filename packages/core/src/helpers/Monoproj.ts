import { interfaces } from '@monoproj/shared';

export class Monoproj{
  static bootstrap<T extends interfaces.Runnable>(C: {new(): T;}): void {
    const c = new C();
    c.run();
  }
}
4
