var wordsList = [];
var pw;

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

function checkpassword() {
  pw = document.getElementById("pw").value;
  var pwReplaced = pw;
  // for (i = 0; i < 10; i++) {
  for(let i = 0; i <pw.length; i++) {
    if(pwReplaced.includes(2017)) {
      var position = pwReplaced.search(2017);
      pwReplaced = pwReplaced.slice(0, position);
    }
    if(pwReplaced.includes(17)) {
      var position = pwReplaced.search(17);
      pwReplaced = pwReplaced.slice(0, position);
    }
    if (pw[i].includes(0)) {
      pwReplaced = pwReplaced.replace(/0/g, "o");
    }
    if (pw[i].includes(1)) {
      pwReplaced = pwReplaced.replace(/1/g, "l");
    }
    if (pw[i].includes(2)) {
      pwReplaced = pwReplaced.replace(/2/g, "z");
    }
    if (pw[i].includes(3)) {
      pwReplaced = pwReplaced.replace(/3/g, "e");
    }
    if (pw.includes(4)) {
      pwReplaced = pwReplaced.replace(/4/g, "a");
    }
    if (pw.includes(5)) {
      pwReplaced = pwReplaced.replace(/5/g, "s");
    }
    if (pw.includes(6)) {
      pwReplaced = pwReplaced.replace(/6/g, "g");
    }
    if (pw.includes(9)) {
      pwReplaced = pwReplaced.replace(/9/g, "g");
    }
    if (pw.includes("!")) {
      pwReplaced = pwReplaced.replace(/!/g, "i");
    }
  }
  var pwLower = pwReplaced.toLowerCase();
  for (i = 0; i < wordsList.length; i++) {
    if  (pwLower === wordsList[i]) {
      document.getElementById("results").innerHTML = "Your password '" + pw + "' is weak, not secure, and can be found in a dictionary attack.\
      Please change your password so that it does not match a word in the dictionary.";
      return;
    }
  }
  document.getElementById("results").innerHTML = "Congratulations! Your password '" + pw + "' is strong, secure, and cannot be found in a dictionary attack."
}
