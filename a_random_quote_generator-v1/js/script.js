/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
   * For this project I utilized the FSJS Project Walkthrough, 
   * re-watched TreeHouse instructional videos for guidance, and
   * reached out to TreeHouse Slack Team for support.
***/

/***
   * The `quotes` array is an array of objects, each containing a 
   * quote and source (author).
   * Most of the objects also contain values for citation (book, 
   * speech, etc.) and year.
***/
const quotes = [
  {
    quote: 'Beware; for I am fearless, and therefore powerful.',
    source: 'Mary Shelley',
    citation: 'Frankenstein',
    year: 1818
  },
  {
    quote: 'Stuff your eyes with wonder, he said, live as if you’d drop dead in ten seconds. See the world. It’s more fantastic than any dream made or paid for in factories.',
    source: 'Ray Bradbury',
    citation: 'Fahrenheit 451',
    year: 1953
  },
  {
    quote: 'It does not do to dwell on dreams and forget to live.',
    source: 'J.K. Rowling',
    citation: "Harry Potter and the Sorcerer's Stone",
    year: 1997
  },
  {
    quote: 'The truth is rarely pure and never simple.',
    source: 'Oscar Wilde',
    citation: 'The Importance of Being Earnest',
    year: 1895
  },
  {
    quote: 'I am no bird; and no net ensnares me: I am a free human being with an independent will.',
    source: 'Charlotte Brontë',
    citation: 'Jane Eyre',
    year: 1847
  },
  {
    quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
    source: 'Louisa May Alcott',
    citation: 'Little Women',
    year: 1868
  },
  {
    quote: 'Destroying things is much easier than making them.',
    source: 'Suzanne Collins',
    citation: 'The Hunger Games',
    year: 2008
  },
  {
    quote: "The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.",
    source: 'Lois Lowry',
    citation: 'The Giver',
    year: 1993
  },
  {
    quote: 'Contemplation seems to be about the only luxury that costs nothing.',
    source: 'Dodie Smith',
    citation: 'I Capture the Castle',
    year: 1948
  },
  {
    quote: 'I teach you to be warriors in the garden so you will never be gardeners in the war.',
    source: 'Tomi Adeyemi',
    citation: 'Children of Blood and Bone',
    year: 2018
  },
  {
    quote: 'Freeing yourself was one thing, claiming ownership of that freed self was another.',
    source: 'Toni Morrison',
    citation: 'Beloved',
    year: 1987
  },
  {
    quote: 'There are years that ask questions and years that answer.',
    source: 'Zora Neale Hurston',
    citation: 'Their Eyes Were Watching God',
    year: 1937
  },
  {
    quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
    source: 'Kurt Vonnegut',
    citation: 'Mother Night',
    year: 1961
  },
  {
    quote: 'My thoughts are stars I cannot fathom into constellations.',
    source: 'John Green',
    citation: 'The Fault in Our Stars',
    year: 2012
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West'
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    source: 'Eleanor Roosevelt',
    citation: 'This is My Story',
  }
];

//log the `quotes` array to the console to check for bugs
console.log(quotes);

/***
 * The `getRandomQuote` function is able to select an object
 * from the `quotes` array at random.
***/

function getRandomQuote() {

// The `randomNumber` variable calculates a random number
// between 0 and the length of the `quotes` array.

  let randomNumber = Math.floor( Math.random() * quotes.length);
  console.log(randomNumber);
 
// The value associated with `randomNumber` in the `quotes` array 
// is stored in the variable `randomQuote` using bracket notation.

  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

//run `getRandomQuote` function
getRandomQuote();

/***
 * The `printQuote` function calls the `getRandomQuote` function
 * and prints a randomly generated quote to the webpage.
***/

function printQuote() {
    
  let quote = getRandomQuote();

    // `html` variable initiates the html string
      let html = ''
      html =
      `<p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}`

      // concatenates the citation of a quote 
      // to the end of the html string when available
        if ( quote.citation )  {
          html += `<span class="citation">${quote.citation}</span>`
        }; 

      // concatenates the year of a quote
      // to the end of the html string when available
        if ( quote.year ) {
          html += `<span class= "year">${quote.year}</span>`
        }; 

    // concatenates the closing <p> tag to the end of the html string
    html += `</p>`


  // inserts the concatenated html string into the HTML file
  document.getElementById('quote-box').innerHTML = html;
};

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);