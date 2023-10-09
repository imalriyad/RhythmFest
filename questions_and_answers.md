<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B:`ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>There's a typo. You intended to declare a variable called greeting, but you mistakenly assigned an empty object to a variable called greetign. Since greetign is not declared with let or var, it becomes an undeclared variable.
The correct variable name should be greeting, not greetign. Therefore, the correct answer is: B: ReferenceError: greetign is not defined</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: "12"</b></summary>
<p>

#### Answer: ?

<i>In JavaScript, when you use the + operator to add two values together, if one or both of the values are strings, JavaScript will perform string concatenation instead of numerical addition. So, in the expression 1 + "2", the number 1 is implicitly converted to a string, and then string concatenation occurs.
As a result, the output of sum(1, "2") will be the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A:['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i>Changing the info.favoriteFood property does not modify the food array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b> B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>You have a funtion named sayHi that expect a name as parameter to return `Hi there, ${name}` but you called this funtion without any argument thats why the function will be return B: `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>In js 0 is considerd as a falsy value . because of if(num) condition only 1,2,3 will be loop so only 3 time will be looped thats why answer is C: 3</i>

</p>
</details>
