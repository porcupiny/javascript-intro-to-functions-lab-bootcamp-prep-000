function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var uppercase = "HELLO!";
var lowercase = 'hello!';

function logShout(string) {
  console.log(string.toUpperCase());
  uppercase.toUpperCase() === uppercase; // true
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  lowercase.toLowerCase() === lowercase;  // true
}

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!";
  }
  else if (string === uppercase) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."; 
  }
}