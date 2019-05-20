import {
  decorators,
  helpers,
} from '@monoproj/core';

const { Service } = decorators;
const { Monoproj } = helpers;

@Service({
  name: 'user',
  modules: [

  ]
})
class MicroService {
  init() {}
  run() {
    console.log('hello world');
  }
}

Monoproj.bootstrap(MicroService);
