# hash-query
> Manage query parameters in URL hash.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/hash-query
```

## usage
```js
import HashQuery from '@jswork/hash-query';

const hq = new HashQuery();

// Get query parameters
const params = hq.get();
console.log(params.get('id')); // null

// Set query parameters
hq.set(new URLSearchParams({ id: '123', name: 'test' }));
// URL will be updated to #/?id=123&name=test

// Update query parameters
hq.update({ name: 'new_test', age: '30' });
// URL will be updated to #/?id=123&name=new_test&age=30

hq.update({ age: null });
// URL will be updated to #/?id=123&name=new_test

// Convert to JSON
const json = hq.toJson();
console.log(json); // { id: '123', name: 'new_test' }

// Create from JSON
const newParams = HashQuery.fromJson({ city: 'shanghai' });
hq.set(newParams);
// URL will be updated to #/?city=shanghai

// Static toJson
const staticJson = HashQuery.toJson(new URLSearchParams('key=value'));
console.log(staticJson); // { key: 'value' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/@jswork/hash-query/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/hash-query
[version-url]: https://npmjs.org/package/@jswork/hash-query

[license-image]: https://img.shields.io/npm/l/@jswork/hash-query
[license-url]: https://github.com/afeiship/@jswork/hash-query/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/hash-query
[size-url]: https://github.com/afeiship/@jswork/hash-query/blob/master/dist/@jswork/hash-query.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/hash-query
[download-url]: https://www.npmjs.com/package/@jswork/hash-query
