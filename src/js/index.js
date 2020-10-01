import '../scss/style.scss';

import Search from './search'


(() => {
    const app = {
        Search
    };
  
    document.addEventListener('DOMContentLoaded', () => {
      for (const key in app) {
        app[key]();
      }
    }, false);
  
  })()