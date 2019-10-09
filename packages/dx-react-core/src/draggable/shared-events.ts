/* globals window:true */

import { EventEmitter } from 'dx-core-rtl';

let eventEmitter;
/** @internal */
export const getSharedEventEmitter = () => {
  if (!eventEmitter) {
    eventEmitter = new EventEmitter();

    ['mousemove', 'mouseup', 'touchmove', 'touchend', 'touchcancel']
      .forEach(name => window.addEventListener(
        name, e => eventEmitter.emit([name, e]), { passive: false },
      ));
  }
  return eventEmitter;
};
