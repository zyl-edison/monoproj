import {Skeleton} from './Skeleton';
import { Initialable, Runnable } from '../interfaces';

export class System implements Initialable, Runnable {
  skeleton: Skeleton;

  constructor() {
    this.skeleton = new Skeleton();
  }

  init(): void {
    // Engineer start assembling different modules onto skeleton
  }
  run(): void {
    // Run all assembled modules
  }
}
