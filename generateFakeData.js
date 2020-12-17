var faker = require('faker');

var database = { products: [], employees: [] };

for (var i = 1; i <= 50; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

var employees = [
  {
    "id": 2,
    "name": "Mary",
    "gender": "Female",
    "contactPreference": "Phone",
    "phoneNumber": 2345978640,
    "dateOfBirth": "1979/11/20",
    "department": "2",
    "isActive": true,
    "photoPath": "assets/images/mary.png"
  },
  {
    "id": 3,
    "name": "John",
    "gender": "Male",
    "contactPreference": "Phone",
    "phoneNumber": 5432978640,
    "dateOfBirth": "1976/3/25",
    "department": "3",
    "isActive": false,
    "photoPath": "assets/images/john.png"
  },
  {
    "id": 4,
    "name": "David",
    "gender": "Female",
    "contactPreference": "Phone",
    "phoneNumber": "34345",
    "email": "",
    "dateOfBirth": "2018-07-01T08:20:34.000Z",
    "department": "3",
    "isActive": true,
    "photoPath": "assets/images/john.png"
  }
];

database.employees = employees;

console.log(JSON.stringify(database));
