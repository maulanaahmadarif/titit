# Titit (Tweet it)
Simply Highlight your text and tweet it!

Include the assets
``` html
<link rel="stylesheet" href="./path/titit.min.css">
```
or
``` html
<link rel="stylesheet" href="./path/titit.css">
```
and also the script before closing body tag
``` html
<script src="./path/titit.min.js"></script>
```
or
``` html
<script src="./path/titit.js"></script>
```

## Titit Parameters

| Parameter      | Type          | Default |
| -------------  |:-------------:| -------:|
| color          | String        | `#fff`  |
| containerColor | String        | `#000`  |
| elem           | String        | `null`  |

You have to initialized the `elem` parameter to work

## Example
``` javascript
const TititOpt = {
    color: '#fff',
    containerColor: '#000',
    elem: '.content p',
};

const titit = new Titit(TititOpt);
titit.init();
```