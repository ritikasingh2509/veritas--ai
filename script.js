// Simple JS to show placeholder result
document.getElementById("verify-btn")?.addEventListener("click", () => {
  const news = document.getElementById("news-text").value;
  if (!news) {
    alert("Please enter news!");
    return;
  }
  // Placeholder result
  document.getElementById("result").innerHTML = `<p>Verifying news...</p>`;
  setTimeout(() => {
    document.getElementById("result").innerHTML = `<p>Result: <strong>Fake / Real (placeholder)</strong></p>`;
  }, 1500);
});

document.getElementById("submit-feedback")?.addEventListener("click", () => {
  const feedback = document.getElementById("feedback-text").value;
  if (!feedback) {
    alert("Please enter feedback!");
    return;
  }
  document.getElementById("feedback-msg").innerHTML = `<p>Thank you for your feedback!</p>`;
});
