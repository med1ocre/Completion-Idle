function startCutting(treeElement, xpReward) {
  const progressBar = treeElement.querySelector(".progress-bar");
  const oakDuration = 3000; // 3 seconds for an oak tree
  const pineDuration = 4000; // 4 seconds for a pine tree
  const totalTime = treeElement.dataset.treeType === "oak" ? oakDuration : treeElement.dataset.treeType === "pine" ? pineDuration : 0;
  const increment = totalTime / 100; // Adjust this value for smoothness

  let startTime;

  function updateProgressBar(timestamp) {
    if (!startTime) startTime = timestamp;
    const currentTime = timestamp - startTime;
    const progress = (currentTime / totalTime) * 100;
    progressBar.style.width = progress + "%";

    if (currentTime < totalTime) {
      requestAnimationFrame(updateProgressBar);
    } else {
      // Ensure the progress bar reaches 100%
      progressBar.style.width = "100%";
      // Give XP reward
      // You can add your XP reward logic here. For now, I'll just show an alert
      console.log("XP GAINED!");

      // Restart cutting action
      setTimeout(() => {
        progressBar.style.width = "0%";
        startTime = null; // Reset startTime to null for the new cutting cycle
        requestAnimationFrame(updateProgressBar);
      }, 1000); // Add a delay before restarting the cutting action (1 second in this example)
    }
  }

  requestAnimationFrame(updateProgressBar);
}
