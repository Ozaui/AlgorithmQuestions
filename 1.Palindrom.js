const palindrome = (string) => {
  let reverseString = string.split("").reverse().join("");

  if (reverseString == string) {
    console.log("This word is palindrom");
  } else {
    console.log("This word is not palindrom");
  }
};

palindrome("ama");
