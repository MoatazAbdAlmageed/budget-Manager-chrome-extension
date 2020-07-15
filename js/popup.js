$(() => {
  // add spending
  $("#updateSpending").click(() => {
    const userInput = $("#spendingAmount").val();
    chrome.storage.sync.get(["spending", "limit"], (budget) => {
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

      if (parseInt(newExpense) > parseInt(budget.limit)) {
        chrome.notifications.create("limitExceeded", {
          type: "basic",
          iconUrl: "alert.png",
          title: "Budget Manager",
          message: "you have exceeded your limit",
        });
      }
      // empty user input
      $("#limit").val("");
    });
  });
});
