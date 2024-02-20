function propose(){
    let answer = document.getElementById("btn").value;
    answer = prompt("Hey Hussaina,I've really enjoyed our conversations lately, and I was thinking it would be nice to spend some more time together outside. Would you be interested in grabbing a coffee with me sometime? I'd love to chat more over a latte or whatever your favorite drink is.No pressure, though! Let me know what you think.     (Type 'yes' or 'no')");
    if(answer === "yes"){
      alert("Great! I'm really looking forward to it");
    }
    else if(answer === "no"){
      alert("Sochle baar baar moko ni mile!")
    }
    else{
      alert("Invalid answer type yes or no ");
    }
  }