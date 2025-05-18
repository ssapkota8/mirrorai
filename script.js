function detectAI() {
  const text = document.getElementById("inputText").value;
  const resultDiv = document.getElementById("result");

  if (!text.trim()) {
    resultDiv.innerHTML = "Please enter some text to analyze.";
    return;
  }

  // Dummy detection logic (replace with API later)
  const isAI = text.length % 2 === 0;

  if (isAI) {
    resultDiv.innerHTML = "🤖 This looks like it was written by AI.";
  } else {
    resultDiv.innerHTML = "🧠 This looks like it was written by a human.";
  }
}
