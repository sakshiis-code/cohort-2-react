// import box from './app.js'

// var h1 = React.createElement('h1',{id:'main'},'Hey, I am Sakshi')

// var h2 = React.createElement('h2',{id:'main'},'I am learning React')

// var div = React.createElement('div', {id:'parent'}, [h1,h2,box()])

// var root = ReactDOM.createRoot(document.querySelector('#container'))

// root.render(div)


import app from './app.js'

const root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(app())