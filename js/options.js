$(() => {
  // add spending
  $("#saveLimit").click(() => {
    const userInput = $("#limitValue").val();
    chrome.storage.sync.set({ limit: userInput });
  });

  function syncAmount() {
    //todo add to extnsion icon (like notification)
    chrome.storage.sync.get(["spending", "limit"], (budget) => {
      console.log(budget);

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
  }, 1000);

  $("#resetExpense").click(() => {
    var userAction = confirm("Reset?");
    if (userAction == true) {
      chrome.storage.sync.set({ spending: 0 });
      $("#spending").text(0);
      close();
    }
  });
});
