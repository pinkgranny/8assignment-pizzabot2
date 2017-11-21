//Put your Javscript code here:

//create array of menu items
const menuItems = [
  {name: `Vegetarian Pizza`, price: 95},
  {name: `Hawaiian Pizza`, price: 75},
  {name: `Pepperoni Pizza`, price: 90}
];

const totalCost = (qty, price) => {
  return qty * price
}

const cookingTime = (qty) => {
  if (qty > 0 && qty <= 2) {
    return `The pizzas will take 10 minutes.`
  } else if (qty >= 3 && qty <=5) {
     return `The pizzas will take 15 minutes.`
  } else {
       return `The pizzas will take 20 minutes.`
  }
}

let welcomeMessage = "Hey! Happy to serve your pizza. On our menu we have:"

menuItems.forEach((name, index) => {
  welcomeMessage += ` ${index + 1}. ${name.name} ${name.price}kr`
})

alert(welcomeMessage)

const orderName = prompt("Enter the name of the pizza you want to order today.")
const orderPizza = menuItems.find((name) => {
  return name.name === orderName
})
if (orderPizza) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`)
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity, orderPizza.price)} kr. ${cookingTime(orderQuantity)}`)
} else {
  alert(`Sorry, ${orderName} is not on our menu!`)
}
