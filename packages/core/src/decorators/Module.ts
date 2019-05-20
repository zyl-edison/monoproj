import { interfaces } from '@monoproj/shared';
import { Module as ModuleClass } from '../classes';
import {
  DecoratorParamsModule,
} from '../interfaces';

export function Module({ type }: DecoratorParamsModule) {
  console.log(type);
  return function classDecorator<T extends interfaces.Constructor<ModuleClass>>(C: T) {
    return class extends C {}
  }
}
