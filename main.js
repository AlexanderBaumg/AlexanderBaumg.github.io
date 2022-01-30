//Wisdom stuff
function randint(n) {
  return Math.floor(Math.random() * n);
}

function getTitle(data) {
  let pages = data.query.pages;
  let firstKey = Object.keys(pages)[0];
  return pages[firstKey].title;
}

function wisdom() {

  if (Math.random() < 0.05) {
    $("#wisdomphrase").text("Password is Chungus");
  }

  else {
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content",
      success: function(data) {
        $("#wisdomphrase").text(getTitle(data));
      },
      error: function(xhr, error) {
        console.log(xhr);
        console.log(error);
      }
    });
  };
}

function randomletter() {
  var letters = "abcdefghijklmnopqrstuvwxyzö";
  return letters = letters[randint(letters.length)];
}

var subs = [
  "God", "The ball", "The road", "Biven", "The bug", "The store", "The wisdom button", "The password", "Art", "The hyperlink", "Space", "The stickbug", "Mother", "Father", "The alphabet", "The knight", "The code", "The non-wisdom button", "The painting", "The ceiling", "The floor", "The plastic bottle", "The passcode", "The letter " + randomletter(), "The monster", "The alien", "The book", "The lamp", "The system"
];

var desc = [
  "dead", "blind", "sleeping", "gone", "forgotten", "small", "big", "nonexistant", "deaf", "long", "looong", "doing their best", "dreaming", "snoring", "fluffy", "lonely", "equal to " + String(randint(100)), "more than " + String(randint(100)), "less than " + String(randint(100)), "out for lunch", "listening", "on a walk", "bored", "clicking a button over and over again", "____", "nice", "smelly", "greasy", "reading a book", "chewy", "sad", "happy", "red", "blue", "green", "raising livestock", "robbing the local grocery store", "not here", "fraudulent"
];

function nonwisdom() {
  var phrase = subs[randint(subs.length)] + " is " + (Math.random() < 0.2 ? "not " : "") + desc[randint(desc.length)] + ".";
  document.getElementById("nonwisdomphrase").innerHTML = phrase;
}

//Password stuff
var n = 0;
var denials = [
  "Nope.", "Incorrect.", "Wrong.", "Sorry.", "No shot."
];

function submitpassword() {
  var response = $("#response");
  var submission = document.getElementById("submission");
  var submit = submission.value;


  if (submit == "Chungus") {
    response.text("You fool. Never trust the wisdom button.");
    submission.value = "";
    return;
  }

  if (desc.includes(submission.value)) {
    response.text("You fool. Never trust the non-wisdom button.");
    submission.value = "";
    return;
  }

  if (submit == "") {
    response.text("Come on, the password is obviously not nothing.");
    submission.value = "";
    return;
  }

  if (submit == "bananabread") {
    response.text("Why would you say that?");
    submission.value = "";
    return;
  }

  var denial = denials[n % denials.length];
  if (n == 20) {
    response.text("Hint: The password isn't \"bananabread\".");
  } else {
    response.text(denial);
  }
  n++;
  submission.value = "";
}
