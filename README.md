# Use

```console
npm i --save  localstoragemaxsize
```

return `Promise`

```js
import LSms from 'localstoragemaxsize'
;(async ()=> {
  // kb
  const size = await LSms()
  console.log(`localstorage max size is: ${ size }kb`)
})()
```