//Put your Javscript code here:
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

const checkOrderName = (userEntry) => {
  return userEntry === vegetarian || userEntry === hawaiian || userEntry === pepperoni
}

const totalCost = (qty) => {
  return qty * pizzaPrice
}

const cookingTime = (qty) => {
  if (qty >= 3 && qty <= 5) {
    return "The pizzas will take 15 minutes."
  } else if (qty >= 6) {
    return "The pizzas will take 20 minutes."
  } else {
    return "The pizzas will take 10 minutes."
  }
}

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt("Enter the name of the pizza you want to order today.")

if (checkOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`)
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. ${cookingTime(orderQuantity)}`)
} else {
  alert(`Sorry, ${orderName} is not on our menu!`)
}


const wiki = "Hawaiian pizza (also known as Pizza Hawaii) is a pizza topped with tomato sauce, cheese, pineapple, and Canadian bacon or ham. Some versions may include peppers, mushrooms, or bacon.[citation needed] Pineapple as a pizza topping divides public opinion: Hawaiian was the most popular pizza in Australia in 1999, accounting for 15% of pizza sales,[1] and a 2015 review of independent UK takeaways operating through Just Eat found the Hawaiian pizza to be the most commonly available.[2] However, a 2016 survey of US adults had pineapple in the top three least favourite pizza toppings, behind anchovies and mushrooms.[3] Greek-Canadian Sam Panopoulos claimed that he created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savoury flavours, Panopoulos experimented with adding pineapple, ham, bacon and other toppings which were not initially very popular.[4][5][6][7][8] The addition of pineapple to the traditional mix of tomato sauce and cheese, sometimes with ham or sometimes with bacon, soon became popular locally and eventually became a staple offering of pizzerias around the world.[9]"

console.log("Number of words", wiki.split(" ").length)
