var password = document.getElementById("pw");
var wordsList = [];

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

/* ADD YOUR CODE BELOW */
function checkPassword(){
  var pw = document.getElementById("pw").value;
  console.log(pw);
  for (i = 0; i < wordsList.length; i++) {
    if (pw === wordsList[i]) {
      document.getElementById("results").innerHTML = "Your password " + pw + " is not secure and can be bruteforced. Please change your password to one that doesn't matches a dictionary word.";
      return;
    }
  }
  document.getElementById("results").innerHTML = "Congratulations! Your password " + pw + " is secure and cannot be bruteforced.";
}

/*  password.toLowerCase();
  window.alert(password);
  console.log(password);
/*  if(password.includes("0" or "1" or "2" or "3" or "4" or "5" or "6" or "9")){
    password.replace("0", "o");
    password.replace("1", "i");
    password.replace("2", "z");
    password.replace("3", "e");
    password.replace("4", "a");
    password.replace("5", "s");
    password.replace("6", "g");
    password.replace("9", "g");
  }

  password.localeCompare(wordsFile);
  */
}
