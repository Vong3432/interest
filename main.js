var app = new Vue({
	el:'#app',
	data:{
		product: "Socks",
		image:"socks.jpg",
		altText:"This is a sock",
		link:"https://www.target.com.au/medias/static_content/product/images/large/15/43/A241543.jpg",
		inStock:false,
		inventory:0,
		onSale:true,
		details:["80% cotton","20% polyester","Gender-neutral"],
		
		// object
		variants:[
		{
			variantId:2234,
			variantColor:"green",
			variantImage:"greenSocks.jpg"
		},
		{
			variantId:2235,
			variantColor:"blue",
			variantImage:"socks.jpg"
		}
		],

		sizes:["Extra large","Large","Normal","Small"],
		cart:0	
	},
	methods:{
		addToCart(){
			this.cart += 1
		},
		updateProduct(variantImage){
			this.image = variantImage
		},
		dropFromCart(){
			this.cart--
		}
	}
})