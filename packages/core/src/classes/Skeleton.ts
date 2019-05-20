import {Object} from '../interfaces';

type skeletonStatus = 'EMPTY' | 'INSTALLING' | 'DONE';

export class Skeleton implements Object {
  private status: skeletonStatus = 'EMPTY';

  getStatus() {
    this.status;
  }

  setStatus(status: skeletonStatus) {
    this.status = status;
  }

  toString() {
    return 'Skeleton ...';
  }
}
