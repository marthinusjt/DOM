var x = 10;
console.log(x);

document.getElementById('testParagraph').style.color = 'blue';
console.log(document.getElementById('testParagraph').style.color);

// document.getElementsByTagName("p");
// document.getElementsByClassName("classHere");

console.log(document.querySelectorAll("p.sampleClass"));
document.querySelectorAll("p.sampleClass")[0].innerText = "My text was changed!";

// innerText will only reference the text displayed on the screen.
// innerHTML will reference all HTML elements inside the tag. Let's do a quick test:

console.log(document.querySelectorAll("p.sampleClass"));
document.querySelectorAll("p.sampleClass")[0].innerHTML = "<span>I am a whole new element!</span>";

// If we wanted to remove elements, we can do the same thing in reverse! Simply set the innerHTML to be blank and it will erase the contents.

// The syntax for an event listener is:
// document.getElementById('clickThisButton').addEventListener('click', /* function goes here */);
document.getElementById('clickThisButton').addEventListener('click', () => {
    console.log('I was clicked!');
});


// Kind of information that "click" event gives us!
document.getElementById('clickThisButton').addEventListener('click', (details) => {
    console.log(details);
});


// Now when you click the button, the button's background color should turn red!
document.getElementById('clickThisButton').addEventListener('click', (details) => {
    details.target.style.backgroundColor = 'red';
});

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    console.log(event);
});

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
});

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
    console.log(document.getElementsByTagName("p"));
});

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    document.getElementsByTagName("p")[1].innerText = `Everyone please welcome ${event.target.value} to the stage.`;
});

// If you were to backspace the name from the input field... we want the text to return to the original "No name has been entered".
document.getElementById('nameInput').addEventListener('keyup', (event) => {
    if (event.target.value === '') {
        document.getElementsByTagName("p")[1].innerText = `No name has been entered`;
    } else {
        document.getElementsByTagName("p")[1].innerText = `Everyone please welcome ${event.target.value} to the stage.`;
    }
});