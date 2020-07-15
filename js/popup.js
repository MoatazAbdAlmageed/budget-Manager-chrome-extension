$(() => {
  // add spending

  chrome.storage.sync.get("spending", (budget) => {
    if (budget.spending) {
      $("#spending").text(budget.spending);
      //todo add to extnsion icon (like notification)
    }
  });

  // add spending
  $("#updateSpending").click(() => {
    const userInput = $("#spendingAmount").val();
    chrome.storage.sync.get("spending", (budget) => {
      let newExpense = 0;

      // get prev spending
      if (budget.spending) {
        newExpense += parseInt(budget.spending);
      }

      // get user spending
      if (userInput) {
        newExpense += parseInt(userInput);
      }
      chrome.storage.sync.set({ spending: newExpense });

      // update spending
      $("#spending").text(newExpense);

      // empty user input
      $("#limit").val("");
    });
  });
});
