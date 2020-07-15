$(() => {
  function syncAmount() {
    //todo add to extnsion icon (like notification)
    chrome.storage.sync.get(["spending", "limit"], (budget) => {
      if (budget.spending) {
        $("#spending").text(budget.spending);
      }
      if (budget.limit) {
        $("#limit").text(budget.limit);
      }
    });
  }
  // sync spending amount every x amount
  setInterval(() => {
    syncAmount();
  }, 500);
});
