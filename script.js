let username, email , question;

function handleLogin() {
  username = document.getElementById('userName').value;
  email = document.getElementById('userEmail').value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  window.location.href = "bot.html";
}
function handleQuestion() {
    question = document.getElementById('questionInput').value;
    localStorage.setItem("question", question);
  
    // Optional: immediately show question without reload
    document.getElementById("displayedQuestion").innerText = question;
  }