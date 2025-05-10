function analyzeText() {
  const text = document.getElementById('emailText').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  const suspiciousKeywords = [
    "verify your account",
    "click here",
    "urgent",
    "reset password",
    "login now",
    "update your information",
    "you have won"
  ];

  const suspiciousLinks = /(bit\.ly|tinyurl|ow\.ly|http:\/\/|https:\/\/)/g;

  let issues = [];

  suspiciousKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      issues.push(`⚠️ Found keyword: "${keyword}"`);
    }
  });

  if (suspiciousLinks.test(text)) {
    issues.push("⚠️ Contains suspicious link (shortened or external)");
  }

  if (issues.length === 0) {
    resultDiv.innerHTML = "✅ Looks Safe (No suspicious content found)";
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerHTML = issues.join("<br>");
    resultDiv.style.color = "red";
  }
}
