# Babel Brown Bag

You should have installed `npm` and `node`

* Initialize package.json
```javascript
  npm init
```

* run command in your terminal
```
  npm install express  --save
  npm install --save-dev babel-cli babel-preset-env
```

* Create .babelrc configuration file

```json
{
  "presets": ["env"]
}
```

* add `index.js` to your project
with content

```javascript
var express =  require('express');

var app = express();

app.use('/static', express.static('./build'));

app.use(function(req,res) {
  res.sendFile(__dirname + './index.html');
});

app.listen(5000, function() {
  console.log('Server listen at*:' + 5000);
});
```

* add `index.html`
with content

```html
<!DOCTYPE html>
<html>
<head>
  <title>Babel brown bag</title>

</head>
<body>
  <div id="main" style="font-size: 30px; margin: 30px;">
  </div>
  <script src="/static/index.js"></script>
</body>
</html>

```

* init index.js for client side in folder src
```javascript
const INTERVAL_NUMBER = 1000;
const el = document.getElementById("main");
let counter = 0;

setInterval(()=> {
  counter++;
  el.innerHTML = counter;
},INTERVAL_NUMBER)

* create folder `build`

```
run command to transpile javascript

```
./node_modules/.bin/babel ./src/index.js --out-file ./build/index.js
```

open browser on `localhost:5000`
