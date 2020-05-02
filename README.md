# What is this ?

Convert arraying to object with option useful for generating cards

# Instalation

`npm i array-obj`

With import

`import {arr2obj} from 'array-obj'`

With require

`const {arr2obj} = require('array-obj')`

### USAGE ...

```
import {arr2obj} from 'arr2obj'


  arr2obj({
    arr: <YOUR_ARRAY_NAME>,       // your array name
    status: <YOUR_ITEM_STATUS>,   // your status name will apply for each item in the array
    Uid: <YOUR_ITEM_STATUS>,       // the id will increase by one for each item
  })


```

### Example ..

```
import {arr2obj} from 'arr2obj'

let arrTest = ['Alex', 'Jacob', 'Mark'];



  arr2obj({
    arr: arrTest,
    status: 'active',
    Uid: 30,
  })

```

### Return ...

```
[
  {
    name  : 'Alex',
    status: 'active',
    Uid   : 31
  },
  {
    name  : 'Jacob',
    status: 'active',
    Uid   : 32
  },
  {
    name  : 'Mark',
    status: 'active',
    Uid   : 33
  },
];


```
