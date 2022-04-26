let content = document.querySelector(".js-generated.content");
let header = document.createElement("h1");
//<h1 class = dog-name><h1/>
header.setAttribute("class", "dog-name");
//<h1 class = dog-name>Rizzo<h1/>
header.append("Rizzo");
content.append(header);

let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);
//this is inside dogContent
let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.src = "./assets/rizzo.jpg";
dogContent.append(dogImage);

//still inside dogContent but now giving children inside
let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);
//1st baby of dogDetails
let details = document.createElement("h3");
details.append("Description");
dogDetails.append(details);
//2nd baby of dogDetails
let details1 = document.createElement("p");
details1.append(
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
);
dogDetails.append(details1);
//3rd baby of dogDetails
let details2 = document.createElement("h3");
details2.append("Feeding TImes");
dogDetails.append(details2);
//4th baby of dogDetails with lists
let list = document.createElement("ul");
let listOrder = document.createElement("li");
listOrder.textContent = "9:00 am";
let listOrder2 = document.createElement("li");
listOrder2.textContent = "12:00 pm";
let listOrder3 = document.createElement("li");
listOrder3.textContent = "5:00 pm";
list.append(listOrder, listOrder2, listOrder3);
dogDetails.append(list);
