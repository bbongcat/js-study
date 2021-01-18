
var foods = [`치킨`, `김밥`, `라면`];
console.log(foods);

var lastElement = foods.pop();
console.log(foods);
console.log(`제거된 요소: ${lastElement}`);

foods.push(`파스타`);
console.log(foods);

foods.push(`족발`);
console.log(foods);

foods.shift();
console.log(foods);

foods.unshift(`떡볶이`);
console.log(foods);
