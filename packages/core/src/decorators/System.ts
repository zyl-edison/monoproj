import { interfaces } from '@monoproj/shared';
import { System as SystemClass } from '../classes';
import { DecoratorParamsSystem } from '../interfaces';

const { Initialable, Runnable } = interfaces;

export function System({ name, modules }: DecoratorParamsSystem) {
  return function classDecorator<T extends interfaces.Constructor<SystemClass>>(C: T) {
    // C.prototype.name = name;
    // C.prototype.modules = modules;
    return class extends
  }
}
