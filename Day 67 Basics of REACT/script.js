// console.log(React);
// console.log(ReactDOM);



// var h1 = React.createElement('h1', null, 'Hello from React')
// var h2 = React.createElement('h2', null, 'This is h2')

// var div = React.createElement('div', {id:'parent'}, [h1,h2])

// var container = document.querySelector('#container')

// var root = ReactDOM.createRoot(container)

// root.render(div)



// function h1() {
//     return React.createElement('h1', null, 'Hi Sakshi')
// }

// var root = ReactDOM.createRoot(document.querySelector('#container'))

// root.render(h1())



import parent from './parent.js'

const root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(parent())