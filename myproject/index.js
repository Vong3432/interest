/*var _obj = { fname:"Foo", lname:"bar"}

var vm = new Vue({
	data: _obj
});
console.log(vm.fname);
*/

 var vm = new Vue({
 	el:'#intro',
 	data:{
 		firstname:'Vong',
 		lastname:'Nyuk Soon',
 		address:'Malaysia',
 		htmlcontent:'<div><h1>Vue JS template</h1></div>',
 		imgsrc:'logo.png',
 	},
 	methods:{
 		mydetails:function(){
 			return "I am " + this.firstname + " " + this.lastname;
 		}
 	}
 })

// Syntax of creating component
// Vue.component('nameofthecomponent',{ // options});
//This is called local registration and the components will be a part of only the vue instance created.

 Vue.component('testcomponent',{
 	template: '<div><h1>This is coming from component</h1></div>'
 });

 Vue.component('mycomponent',{
 	template:'<div v-on:mouseover = "changeName()" v-on:mouseout = "originalName();"><h1>Custom Component created by <span id="abc">{{name}}</span>.</h1></div>',
 	data:function(){
 		return{
 			name : "Ria"
 		}
 	},
 	methods:{
 		changeName:function(){
 			this.name = "Ben";
 		},
 		originalName:function(){
 			this.name = "Ria";
 		}
 	}
 });

 var component = new Vue({
 	el:'#component_test'
 });

 var component2 = new Vue({
 	el:'#component_test1'
 });


 var component3 = new Vue({
 	el:"#component_test2"
 });

