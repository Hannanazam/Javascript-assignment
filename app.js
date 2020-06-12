//  chapter # 1
//  task 1
//  1.Write a script to display following message on your web page:

    alert("Error! Please enter a valid password")

//   task 2
//   2.   Write a script to display following message on your web page: (Hint : Use line break)

 alert("Wellcome to JS Land..." + "\n" + "Happy Coding!")


//  task 3
//  3. Write a script to display following messages in sequence:

alert("Wellcome to JS Land...")
alert("Happy Coding!")

//  task 4
//  4. Generate the following message through browser’s developer console:

var a = ("Hello...I can run JS through my web browser's console")
alert(a)
console.log(a)

//  chapter # 1 end






//  chapter # 2
//  task 1
//   1. Declare a variable called username.
//   2. Declare a variable called myName & assign to it a string that represents your Full Name.

 var  username = prompt("First name");
 var myName = prompt("Last name");
 alert(username+myName)

//   task 2
//   3. Write script to
//   a) Declare a JS variable, titled message.
//   b) Assign “Hello World” to variable message
//   c) Display the message in alert box.

 var message = "Hello World"
 alert(message)

//   task 3 
//   4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

 var name = prompt("Name");
 var age = prompt("Age");
 var course = prompt("Course");
 alert(name)
 alert(age + " " + "years old")
 alert(course)

//   task 4
//   5. Write a script to display the following alert using one JS variable:

 var a = "PIZZA" + '\n' + "PIZZ" + '\n' + "PIZ" + '\n' + "PI" + '\n' + "P";
 document.write(a)

//   task 5
//   6. Declare a variable called email and assign to it a string that represents 
//   your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.
//   (Hint: use string concatenation)

 var a = prompt("Email")
 alert("My email address is"+ " " + a)

//   task 6
//   Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//   Display the following message in an alert box:

 var book =  "A Smarter Way to learn JavaScript";
 alert("I am trying to learn from the book" + " " + book)

//   task 7 
//   8. Write a script to display this in browser through JS

 var a = "Yah! I can write HTML content through JavaScript"
 document.write(a)

//   task 8
//   9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

 var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
 alert(a)

//   chapter # 2 end






//   chapter # 3
//   task 1
//   1. Declare a variable called age & assign to it your age. Show your age in an alert box.

 var a = prompt("age")
 alert("I am" + " " + a + " " + "years old")

//   task 2
//   2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//   Show his/her number of visits on your web page. For example: “You have visited this site N times”.

 var a = prompt("how many times you visited this site??");
 var b = "You have visited this site" + " " + a + " " + "times"
 alert(b)

//   task 3
//   3. Declare a variable called birthYear & assign to it your birth year.
//    Show the following message in your browser:

 var a = prompt("Birth year")
 document.write("My birth year is" + " " + a + "<br>")
 if (a > 0){
     document.write("Date type of my declared variable is number")
 }
 else{
     document.write("Date type of my declared variable is Alphabet")
 }

//   task 4
//   4. A visitor visits an online clothing store www.xyzClothing.com .

 var a = prompt("Your name");
 var b = prompt("Product title"); 
 var c = prompt("Quantity" + " " , "how many products you wants to order"); 
 document.write(a + " " + "ordered" + " " + c + " " + b + " " + "on XYZ clothing store")

//   chapter # 3 end





//   chapter # 4
//   task 1
//   1. Declare 3 variables in one statement.
//   2. Declare 5 legal & 5 illegal variable names.
//   3. Display this in your browser

 var a = 'Rules for naming JS variables' + '<br>';
 var b = 'Variable names can only contain ,letters, numbers, dollar signs, and underscores.For example $my_1stVariable' + '<br>';
 var c = 'Variables must begin with a letter , dolor sign or minus sign. For example $name, _name or name' + '<br>';
 var d = 'Variables names are case sensitive' + '<br>';
 var e = 'Variables names should not not be JS keywords'
 var f = (a+b+c+d+e);
 document.write(f)

//   chapter # 4 end





//   chapter # 5
//   task 1
//   1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

 var a = +prompt("your first value");
 var b = +prompt("your secound value");
 document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + (a+b))

//   task 2
//   2. Repeat task1 for subtraction, multiplication, division & modulus.

 var val1 = +prompt('your first value');
 var sign = prompt('Your operator');
 var val2 = +prompt('your secound value');
 if(sign === '+'){
 document.write("Sum of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1+val2))
 }
 else if(sign === '-'){
 document.write("Subtraction of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1-val2))
 }
 else if(sign === '*'){
 document.write("Multiplication of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1*val2))
 }
 else if(sign === '/'){
 document.write("Division of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2))
 }
 else if(sign === '%'){
 document.write("Percentage of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2*100+'%'))
 }

//   task 3
//   3. Do the following using JS Mathematic Expressions


 var a = prompt("Enter your initial value");
 var b = ("Value after variable declaration is:" + " " + undefined + "<br>");
 var c = ("Initial value:" + " " + a) + "<br>";
 var d = ++a + "<br>";
 var e = ("Value after increment is:" + d + "<br>");
 var f = a+7 + "<br>";
 var g = ("Value after addition is:" + f + "<br>");
 var h =  (a+6);
 var i = h + "<br>";
 var j = ("Value after decrement is:"+ i + "<br>");
 var k = h/3 + "<br>";
 var l = ("The remainder is:" + k);
 document.write(b+c+e+g+j+l)


//   task 4
//   4. Cost of one movie ticket is 600 PKR. Write a script to store

 var tickets = prompt("How many Tickets you buy");
 var print = "Total cost to buy " + tickets + " tickets to a movie is " + 600*tickets + "PKR";
 document.write(print)

//   task 5
//   5. Write a script to display multiplication table of any number in your browser. E.g

 var table = prompt("Which table you can find")
 var table1 = 'Table of ' + table;
 var tablex1 = table + ' x ' + ' 1 ' + ' = ' + table*1 + "<br>";
 var tablex2 = table + ' x ' + ' 2 ' + ' = ' + table*2 + "<br>";
 var tablex3 = table + ' x ' + ' 3 ' + ' = ' + table*3 + "<br>";
 var tablex4 = table + ' x ' + ' 4 ' + ' = ' + table*4 + "<br>";
 var tablex5 = table + ' x ' + ' 5 ' + ' = ' + table*5 + "<br>";
 var tablex6 = table + ' x ' + ' 6 ' + ' = ' + table*6 + "<br>";
 var tablex7 = table + ' x ' + ' 7 ' + ' = ' + table*7 + "<br>";
 var tablex8 = table + ' x ' + ' 8 ' + ' = ' + table*8 + "<br>";
 var tablex9 = table + ' x ' + ' 9 ' + ' = ' + table*9 + "<br>";
 var tablex10 = table + ' x ' + ' 10 ' + ' = ' + table*10;
 var plus = tablex1+tablex2+tablex3+tablex4+tablex5+tablex6+tablex7+tablex8+tablex9+tablex10; 
 document.write(plus)


//   task 6
//   6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

 var a = prompt("Enter temprature to convert")
 var b = (a-32) * 5 / 9;
 var c = (a * 9 / 5) + 32;
 var d = a + 'oC is ' + c + "oF" + '<br>';
 var e = a + 'oF is ' + b + "oC";
 document.write(d+e)


//   task 5
//   7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.

var a = prompt("Quantity item 1?")
var b = prompt("Quantity item 2?")
var c = "Price of item 1 is " + 650 + "<br>";
var d = "Quantity of item 1 is " + a + "<br>";
var e = "Price of item 2 is " + 100 + "<br>";
var f = "Quantity of item 2 is " + b + "<br>";
var g = "Shipping charges 150" + "<br>" + "<br>";
var h = "Total cost of your order is " + 150*a+a+20*b+b+150;
document.write(c+d+e+f+g+h)

// task 6
// 8.Store total marks & marks obtained by a student in 2 variables

var totalMarks = prompt("Total marks")
var marksobtained = prompt("Marks obtained")
var a = "Marks Sheet" + "<br>";
var b = "<br>" + "Total marks: " + totalMarks + "<br>";
var c = "Total marks: " + marksobtained + "<br>";
var d = "Percentage: " + marksobtained/totalMarks*100 + "%";
var e = (a+b+c+d);
document.write(e)

// task 7
// 9.Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.


var a = prompt("How much Convert??");
var b = prompt("Dollar or Riyal?")
var c = "Currency in PKR" + "<br>";
var d = a*104.80;
var e = a*28;
if (b === "Dollar"){
    document.write(c + "<br>" +  "Total Currency in PKR: " + d)
}
else if (b === "Riyal"){
    document.write(c + "<br>" + "Total Currency in PKR: " + e)
}
else {
   alert("Exchange is not available")
}


// task 8
// 11. The Age Calculator: Forgot how old someone is? Calculate it!

var curYear = prompt("Current year??");
var brtYear = prompt("Your Birth year??");
var a = "Age Calculator" + "<br>";
var b = "<br>" + "Current Year: " + curYear + "<br>";
var c = "Birth Year: " + brtYear + "<br>";
var d = "Your Age is: " + (curYear-brtYear);
var e = (a+b+c+d)
document.write(e)

// task 9
// 12. The Geometrizer: Calculate properties of a circle.

var radius = prompt("Enter a radius");
var a = "The Geometrizer" + "<br>";
var b = "<br>" + "Radius of a circle: " + radius + "<br>";
var circumFerence = (2*3.142*radius);
var c = "The circumference is: " + circumFerence + "<br>";
var arEa = (3.142*radius*radius)
var d = "The area is: " + arEa;
var e = (a+b+c+d);
document.write(e);


// task 10
// 13. The Lifetime Supply Calculator:


var favSnack = prompt("Favourite snake?");
var curAge = prompt("Your current age?");
var maxAge = prompt("Estimated Maximum age?");
var amount = prompt("Amount of snacks per day you ate?");

var a = "The Lifetime Supply Calculator" + "<br>";
var b = "<br>" + "Favourite snake: "+ favSnack + "<br>";
var c = "Current age: "+ curAge + "<br>";
var d = "Estimated Maximum Age: " + maxAge + "<br>";
var e = "Amount of snacks per day: " + amount + "<br>";
var f = (maxAge-curAge);
var g = "<br>" + "You will need " + " " + f*amount + " " +  favSnack + " to last until the ripe old age of " + maxAge; 
var h = (a+b+c+d+e+g);
document.write(h)


// chapter # 5 end










// chapter # 6-9
// task 1


var a = prompt("Enter value of a");
var b = "Result: " + "<br>";
var c = "The value of a is: " + a + "<br>";
var d = "............................................."
var postInc = ++a;
var e = "<br>" + "The value of ++a is: " + postInc + "<br>";
var f = "Now the value of a is: " + postInc + "<br>";
var preInc =  postInc++;
var g = "<br>" + "The value of a++ is: " + preInc + "<br>";
var h = "Now the value of a is: " + postInc + "<br>";
var postDec = --postInc;
var i = "<br>" + "The value of --a is: " + postDec + "<br>";
var j = "Now the value of a is: " + postDec + "<br>";
var preDec = postDec--;
var k = "<br>" + "The value of a-- is: " + preDec + "<br>";
var l = "Now the value of a is: " + postDec + "<br>";
var m = (b+c+d+e+f+g+h+i+j+k+l);
document.write(m)


// task 2
// 2. What will be the output in variables a, b & result after execution of the following script:


var a = prompt("Enter value of a");
var b = prompt("Enter value of b");
var result = --a - --b + ++b + b--;
var vala = "a is " + (1+a) + "<br>";
var valb = "b is " + (1+b)+ "<br>";
var result = "result is " + result + "<br>"; 
var code= "The code is " + "<br>" + "--a;" + "<br>" + "--a - --b;" + "<br>" + "--a - --b + ++b;" + "<br>" + "--a - --b + ++b + b--;";
var c = (vala + valb + result + code);
document.write(c)  

// task 3
// 3. Write a program that takes input a name from user & greet the user.


var userName = prompt("Enter your name?");
var a = "Assalam-o-alaikum " + userName;
document.write(a)

// task 4 
// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.



var table = prompt("Which table you can find")
var table1 = 'Table of ' + table;
var tablex1 = table + ' x ' + ' 1 ' + ' = ' + table*1 + "<br>";
var tablex2 = table + ' x ' + ' 2 ' + ' = ' + table*2 + "<br>";
var tablex3 = table + ' x ' + ' 3 ' + ' = ' + table*3 + "<br>";
var tablex4 = table + ' x ' + ' 4 ' + ' = ' + table*4 + "<br>";
var tablex5 = table + ' x ' + ' 5 ' + ' = ' + table*5 + "<br>";
var tablex6 = table + ' x ' + ' 6 ' + ' = ' + table*6 + "<br>";
var tablex7 = table + ' x ' + ' 7 ' + ' = ' + table*7 + "<br>";
var tablex8 = table + ' x ' + ' 8 ' + ' = ' + table*8 + "<br>";
var tablex9 = table + ' x ' + ' 9 ' + ' = ' + table*9 + "<br>";
var tablex10 = table + ' x ' + ' 10 ' + ' = ' + table*10;
var plus = tablex1+tablex2+tablex3+tablex4+tablex5+tablex6+tablex7+tablex8+tablex9+tablex10; 

var table1 = 'Table of ' + table;
var tabley1 = "5" + ' x ' + ' 1 ' + ' = ' + 5*1 + "<br>";
var tabley2 = "5" + ' x ' + ' 2 ' + ' = ' + 5*2 + "<br>";
var tabley3 = "5" + ' x ' + ' 3 ' + ' = ' + 5*3 + "<br>";
var tabley4 = "5" + ' x ' + ' 4 ' + ' = ' + 5*4 + "<br>";
var tabley5 = "5" + ' x ' + ' 5 ' + ' = ' + 5*5 + "<br>";
var tabley6 = "5" + ' x ' + ' 6 ' + ' = ' + 5*6 + "<br>";
var tabley7 = "5" + ' x ' + ' 7 ' + ' = ' + 5*7 + "<br>";
var tabley8 = "5" + ' x ' + ' 8 ' + ' = ' + 5*8 + "<br>";
var tabley9 = "5" + ' x ' + ' 9 ' + ' = ' + 5*9 + "<br>";
var tabley10 = "5" + ' x ' + ' 10 ' + ' = ' + 5*10;
var plus2 = tabley1+tabley2+tabley3+tabley4+tabley5+tabley6+tabley7+tabley8+tabley9+tabley10;

if (table === ""){
    document.write(plus2)
}
else {
    document.write(plus)
}


// task 5
// 6. Takea) Take three subjects name from user and store them in 3 different variables.


var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");
var obtMarks1 = +prompt("Obtained marks in first subject");
var obtMarks2 = +prompt("Obtained marks in second subject");
var obtMarks3 = +prompt("Obtained marks in third subject");

var a = "Subject " +  " Total Marks " + " Obtained Marks " + " Percentage" + "<br>";
var b = sub1 + " 100 " + obtMarks1 + obtMarks1 + "%" + "<br>";
var c = sub2 + " 100 " + obtMarks2 + obtMarks2 + "%" + "<br>";
var d = sub3 + " 100 " + obtMarks3 + obtMarks3 + "%" + "<br>";
var g = (obtMarks1 + obtMarks2 + obtMarks3)
var e = "300" + "  "  + g + "  " + (g/3) + "%";
var f = (a+b+c+d+e);
document.write(f)

// chapter # 6-9 end
