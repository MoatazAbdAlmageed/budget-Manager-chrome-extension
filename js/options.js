$(() => {
  // add spending
  $("#saveLimit").click(() => {
    const userInput = $("#limitValue").val();
    chrome.storage.sync.set({ limit: userInput });
  });

  // fill form with prev data
  chrome.storage.sync.get("limit", (budget) => {
    if (budget.limit) {
      $("#limitValue").val(budget.limit);
    }
  });

  $("#resetExpense").click(() => {
    var userAction = confirm("Reset?");
    if (userAction == true) {
      chrome.storage.sync.set({ spending: 0 }, () => {
        chrome.notifications.create("spendingReset", {
          type: "basic",
          iconUrl: "icon.png",
          title: "Spending reset",
          message: "Spending reset successfully",
        });
      });
      $("#spending").text(0);
      // close();
    }
  });
});
