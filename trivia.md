# It's time for Trivia!
Welcome to the Trivia Dome! I'm your host, Instructor_Cody!

## Rules of Engagement
Once in a breakout room, you must do the following:
1. Choose a spokesperson (only one person can answer for the team)
2. Come up with a team name and post it in Discord along with the team members. (Ex: The Fighting Mongooses: Bill*, Steve, Mary, *spokesperson)
3. Begin friendly trash talking in Discord!!
4. Once a question is asked, your spokesperson must answer in Discord, and may only answer once. Any edited answers in Discord will be disqualified from the round and no points will be given.
5. After all teams have answered, the score will be posted and the next question will be asked.
6. The first team to answer correctly gets full points. i.e. with 5 teams, the first team to answer correctly gets 5 points, the next correct team gets 4 points, and so on and so forth.

-----------------------------------------------------------
## Question 1
What are the Big 3 languages in Front-end Development?

    a) HTML, CSS, and Java  

    b) XML, JavaScript, and CSS  

    c) HTML, CSS, and JavaScript  

    d) Blood, Sweat, and Tears

<details>
    <summary>Answer: </summary>
    <h3>C</h3>
</details>

-----------------------------------------------------------
## Question 2
What 3 things are wrong with this code?

Type your answer!
```html
1  <div class="container">
2      <div class="top"></div>
3          <img src="image.jpg">
4          <h1>Look at that picture!</h1>
5      </div>
6      <div class="bottom">
7          <h3>I'm the footer!</h2>
8          <p>If you'd like to learn more, contact us!</p>
9      </div>
10 </div>
```
<details>
    <summary>Answer: </summary>
    <ol>
        <li>Line 2: <code>&lt;div class="top"&gt;</code> closes immediately </li>
        <li>Line 3: <code>img</code> tag is missing it's <code>alt</code> attribute</li>
        <li>Line 7: <code>h3</code> is the opening tag, but <code>h2</code> is the closing tag</li>
    </ol>
</details>

-----------------------------------------------------------
## Question 3
Which of these is NOT an HTML tag?

    a) ul

    b) aside

    c) thead

    d) il

<details>
    <summary>Answer: </summary>
    <h3>D</h3>
</details>

-----------------------------------------------------------
## Question 4
2B or ! 2B?
```
var number = 1;
var letters = ["A", "B", "C", "D", "E"]
function compute(){
	for(var i = 0; i < letters.length; i++){
		if(i == 1){
			number = number + number * number
			return number + letters[i]
		}
	}
	return number + letters[i]
}
var answer = compute();
console.log(answer);
```

That is the question...

    a) True

    b) False

<details>
    <summary>Answer: </summary>
    <h3>A</h3>
</details>

-----------------------------------------------------------
## Question 5
What is the difference between a console.log and a return?

    a) console.log prints out what you ask it to as soon as it encounters the line and return only prints after the function ends

    b) console.log prints out what you ask it to and return provides a value at the end of a function

    c) return is purely for debugging purposes and console.logs are for ending functions

    d) There is no difference between the two

<details>
    <summary>Answer: </summary>
    <h3>B</h3>
</details>

-----------------------------------------------------------
## Question 6
How would you get the third to last value in an array? (Assuming the array has more than 3 values)

    a) array[array.length-3]

    b) array[-3]

    c) array[array.length-1-1]

    d) array[length-2]

<details>
    <summary>Answer: </summary>
    <h3>A</h3>
</details>

-----------------------------------------------------------
## Question 7
Which position property would be most useful for creating a cookie consent policy that follows you around until you dismiss it?

    a) position: absolute

    b) position: relative

    c) position: fixed

    d) position: sticky

<details>
    <summary>Answer: </summary>
    <h3>C</h3>
</details>

-----------------------------------------------------------
## Question 8
What are the benefits of using display: flex rather than display: inline-block?

Type the answer!

<details>
    <summary>Answer: </summary>
    <h3>Instructor's discretion</h3>
</details>

-----------------------------------------------------------
## Question 9
Predict what will show up in the console:
```
function Something(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 10){
			console.log("We got a big one!");
		} else {
			result+=arr[i]
		}
	}
	if(result < 10){
		console.log("You're killin' me, Smalls");
	} else {
		return "You're gonna need a bigger funcion!";
	}
}
Something([1,8,21,-11,12,2,9,15,7]);
```

<details>
    <summary>Answer: </summary>
    <p>
        We got a big one!
        <br>
        We got a big one!
        <br>
        We got a big one!
    </p>
</details>

-----------------------------------------------------------
## BONUS:
What do Batman and the `<html>` tag have in common?

<details>
    <summary>Answer: </summary>
    <h3>They both have no parents.</h3>
</details>

-----------------------------------------------------------

