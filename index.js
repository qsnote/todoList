import './src/index.css'

console.log(1)
if (module.hot) {
  module.hot.accept('./index.js', function () {
    console.log(2)
  } )
}