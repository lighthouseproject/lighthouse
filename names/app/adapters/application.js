// import LFAdapter from 'ember-localforage-adapter/adapters/localforage';

// export default LFAdapter.extend({
//   namespace: 'scoobydo'
// });

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'govhack.data.geek.nz',
  path: 'data'
});
