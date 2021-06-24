/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * "quotes" array includes: 
 * 13 objects (quotes) and 
 * 6 properties ("quote", "source", "citation", "year", "season", "episode") in each object. 
***/
const quotes = [
  {
    quote: "Beautiful flowers, too, eventually wither and fall. That’s the fate of all living beings.",
    source: "Makishima Shougo", 
    citation: "Return of the Psychotic Prince",   
    year: 2012,
    season: 1,
    episode: 6
  },
  {
    quote:"I wonder what sort of criteria you use to divide people into good and evil.",
    source: "Makishima Shougo",
    citation: "Saint's Supper",
    year: 2012,
    season: 1,
    episode: 11
  },
  {
    quote: "Society doesn’t always do what’s right. That’s exactly why we ourselves must live virtuous lives.",
    source: "Tsunemori Akane",
    citation: "The Scales of Justice",    
    year: 2014,
    season: 2,
    episode: 1
  },
  {
    quote: "Books are not something that you just read words in. They’re also a tool to adjust your senses.",
    source: "Makishima Shougo",
    citation: "The Town Where Sulfur Falls",
    year: 2013,
    season: 1,
    episode: 15
  },
  {
    quote: "Being a detective isn’t about bringing someone down, but rather protecting someone.",
    source: "Kougami Shinya",
    citation: "Those Capable",    
    year: 2012,
    season: 1,
    episode: 2
  },
  {
    quote: "They say that fools learn from their experiences, while the wise learn from history.",
    source: "Nobuchika Ginoza",
    citation: "Rearing Conventions",    
    year: 2012,
    season: 1,
    episode: 3
  },
  {
    quote: "An unforeseen situation...An unexpected turn of events...In the face of those, You too will face your true self.",
    source: "Makishima Shougo",
    citation: "Methuselah's Game",
    year: 2012,
    season: 1,
    episode: 10
  },
  {
    quote: "When you gaze long into an abyss, the abyss gazes into you.",
    source: "Kougami Shinya",
    citation: "Nobody Knows Your Mask",   
    year: 2012,
    season: 1,
    episode: 4
  },
  {
    quote: "Charisma has three points. The nature of a hero or prophet, the ability to simply make you feel good when you’re around them, and the intelligence to eloquently talk about all sorts of things",
    source: "Saiga Jouji",
    citation: "Fruit of Paradise",    
    year: 2012,
    season: 1,
    episode: 9
  },
  {
    quote: "There’s a limit to the amount of pleasure a person can obtain. But pleasure brought out by intellect is infinite.",
    source: "Kouzaburou Touma",
    citation: "Iron Heart",
    year: 2013,
    season: 1,
    episode: 17
  },
  {
    quote: "When you entrust so much of your everyday life to those electronic devices, the argument that you aren't a cyborg isn’t very convincing.",
    source: "Toyohisa Senguji",
    citation: "Fruit of Paradise",    
    year: 2012,
    season: 1,
    episode: 9
    
  },
  {
    quote: "When a man faces fear, his soul is tested. What he was born to seek… what he was born to achieve… his true nature will become clear.",
    source: "Makishima Shougo",
    citation: "Nobody Knows Your Face",   
    year: 2012,
    season: 1,
    episode: 5
    
  },
  {
    quote: "Everyone just lives in their own cell, and the system tames them by giving them each their own personal serenity.",
    source: "Makishima Shougo",
    citation: "Nobody Knows Your Face",   
    year: 2012,
    season: 1,
    episode: 5
  },
];
 
/***
 * "getRandomQuote" function
 * 
 * @param {[array]} array - [Input: Array with objects (quotes).]
 * @returns {[object]} [Returns a random object (quote) from the input array.]
***/
function getRandomQuote(array) { 
  let index = Math.floor(Math.random()*array.length);
  let quote = array [index];      //A random quote from "array" is copied and stored in the variable "quote".
  
  return quote 
 }
 
/***
 * "getBackgroundColor" function produces, with three randomely generated hues in rbg format, a background color for the webpage.
 ***/
function getBackgroundColor() {
  const getRGB = () => Math.floor(Math.random()*256);
  const color = `rgb(${getRGB()}, ${getRGB()}, ${getRGB()})`

 //The generated color will be added to the body section of the html file.
 document.querySelector("body").style.backgroundColor = color; 
  return;
}

/***
 * "printQuote" function constructs and prints the quote to the webpage.
***/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
  `;

  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year"> AD ${randomQuote.year}</span>`;
  }

  if (randomQuote.season) {
    html += `<span>, season: ${randomQuote.season}, </span>`;
  }
  if (randomQuote.episode) {
    html += `<span>episode: ${randomQuote.episode}</span>`;
  }
  
  html += `</p>`; //Addition of the paragraph closing tag to close the string.
 
  console.log(html);   //The completed string to be printed onto the html file.
  document.getElementById("quote-box").innerHTML = html; //Provided by "Treehouse, FSJS Project Walkthrough".
  
  return; 
}

/***
 * "quoteTimer" function updates the currently printed quote and background color every 10 seconds.
 ***/
function quoteTimer () {
  setInterval(function() {getBackgroundColor()}, 10000);
  setInterval(function() {printQuote()}, 10000);
}

//Upon refreshing or starting the webpage a quote and background color will be added to the page. The timer for which the quote will be updated regularly will also start.
getBackgroundColor();
printQuote();
quoteTimer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//Upon clicking the "Show another quote" a new quote and background color will be generated.
document.getElementById('load-quote').addEventListener("click", getBackgroundColor, false);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
