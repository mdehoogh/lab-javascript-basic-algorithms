// Iteration 1: Names and Input
/*

### Iteration 1: Names and Input

	1.1 Create a variable `hacker1` with the driver's name.

	1.2 Print `"The driver's name is XXXX"`.

  	1.3 Create a variable `hacker2` with the navigator's name.

  	1.4 Print `"The navigator's name is YYYY"`.

*/
var hacker1='driver';
console.log("The driver's name is "+hacker1+".");

var hacker2='driverseat';
console.log("The navigator's name is "+hacker2+".");

// Iteration 2: Conditionals
/*
  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.
*/
if(hacker1.length>hacker2.length)
    console.log("The driver has the longest name, it has "+hacker1.length+" characters.");
else
if(hacker2.length<hacker2.length)
    console.log("The navigator has the longest name, it has "+hacker2.length+" characters.");
else
    console.log("Wow, you both have equally long names, "+hacker2.length+" characters.");

// Iteration 3: Loops
/*
### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`
*/

console.log("Uppercased, with blanks in between:");
for(var i=0;i<hacker1.length;i++)process.stdout.write(hacker1[i].toUpperCase()+" ");console.log();
// or:
var str="";
for(var i=0;i<hacker1.length;i++)str+=" "+hacker1[i].toUpperCase();console.log(str.slice(1));

console.log("Reversed:");
for(var i=hacker2.length;i>0;)process.stdout.write(hacker2[--i]);console.log();

// compare lexicographically
if(hacker1.localeCompare(hacker2)<0)
    console.log("The driver's name goes first.");
else
if(hacker2.localeCompare(hacker1)<0)
    console.log("The navigator's goes first definitely.");
else
    console.log("What?! You both have the same name?");
/*
#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
*/
function getNumberOfWords(text){
  return (text==undefined||text.length==0?0:text.split(" ").length+1);
}
function getNumberOfTimesEtOccurs(text){
  var words=text.split(" ");
  var result=0;
  // OOPS forgot `var` that's why I changed the loop index variable below from i to p as it would only get executed once!!!!
  for(var i=0;i<words.length;i++)if(words[i].toLowerCase()=="et")result++;
  return result;
}
var paragraphs=["Et is a long established fact that a reader will be ET distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","There are many variations et of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to et use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat et predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, et et et and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
console.log("\nNumber of paragraphs to test: "+paragraphs.length);
for(var p=0;p<paragraphs.length;p++){
  console.log("Number of words in paragraph #"+(p+1)+": "+getNumberOfWords(paragraphs[p])+".");
  console.log("The word `et` occurs "+getNumberOfTimesEtOccurs(paragraphs[p])+" times in this paragraph.");
}

/*
#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/
// palindroom detectie
function isAPalindrome(text){
  var lastindex=text.length;
  if(lastindex==0)return false;
  var firstindex=-1;
  var lowercaseText=text.toUpperCase();
  console.log("Testing if '"+lowercaseText+"' is a palindrome!");
  var ascii;
  do{
    // find the next index
    while(++firstindex<lastindex){
      ascii=lowercaseText.charCodeAt(firstindex);
      if(ascii>=65&&ascii<=90)break;
      console.log("Skipping '"+lowercaseText[firstindex]+"' as it's not a letter of the alphabet.");
    }
    if(firstindex==lastindex)return true;
    console.log("First index: "+firstindex);
    while(--lastindex>firstindex){
      ascii=lowercaseText.charCodeAt(lastindex);
      if(ascii>=65&&ascii<=90)break;
      console.log("Skipping '"+lowercaseText[lastindex]+"' as it's not a letter of the alphabet.");
    }
    console.log("Last index: "+lastindex);
    if(firstindex==lastindex)return true;
    console.log("Does '"+lowercaseText[firstindex]+"' equal '"+lowercaseText[lastindex]+"'?");
    if(lowercaseText[firstindex]!=lowercaseText[lastindex])return false;
  }while(1);
}
var phraseCheck="Amor, Roma?";
console.log("\n'"+phraseCheck+"' is "+(isAPalindrome(phraseCheck)?"":"not ")+"a palindrome.");
phraseCheck="stack cats";
console.log("\n'"+phraseCheck+"' is "+(isAPalindrome(phraseCheck)?"":"not ")+"a palindrome.");

