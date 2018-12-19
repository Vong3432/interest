var app = new Vue({
	el: "#app",
	data:{
		message: 'Hello Vue!'
	}
})

var app2 = new Vue({
	el: "#app-2",
	data:{
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: "#app-3",
	data:{
		seen: true
	}
})

var app4 = new Vue({
	el: "#app-4",
	data:{
		myFood:[
		{ foodItems: 'Burger'},
		{ foodItems: 'Fries'},
		{ foodItems: 'Kuching Laksa'}
		]
	}
})

var app5 = new Vue({
	el: "#app-5",
	data:{
		message: 'Hello World!'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el:"#app-6",
	data:{
		message: 'Hello Vue'
	}
})

// Define a new component called todo-item
Vue.component('todo-item',{
	// The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
	props:['todo'],
	template:' <li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

Vue.component('todo-myitem',{
	props:['a'],
	template:'<li> {{ a.text }}</li>'
})

var app7_1 = new Vue({
	el:'#app-7_1',
	data:{
		wishList:[
		{ id: 0, text: 'BMW'},
		{ id: 1, text: 'Gaming pc'}
		]
	}
})

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})