$(() => {
  // add total

  chrome.storage.sync.get("total", (budget) => {
    if (budget.total) {
      $("#total").text(budget.total);
      //todo add to extnsion icon (like notification)
    }
  });

  // add expense
  $("#addExpense").click(() => {
    const userInput = $("#amount").val();
    chrome.storage.sync.get("total", (budget) => {
      let newTotal = 0;

      // get prev amount
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      // get user amount
      if (userInput) {
        newTotal += parseInt(userInput);
      }
      chrome.storage.sync.set({ total: newTotal });

      // update amount
      $("#total").text(newTotal);

      // empty user input
      $("#amount").val("");
    });
  });
});
