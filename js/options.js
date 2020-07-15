$(() => {
  function syncAmount() {
    chrome.storage.sync.get("total", (budget) => {
      if (budget.total) {
        $("#total").text(budget.total);
        //todo add to extnsion icon (like notification)
      }
    });
  }
  // sync total amount every x amount
  setInterval(() => {
    syncAmount();
  }, 500);

  $("#resetTotal").click(() => {
    var userAction = confirm("Reset?");
    if (userAction == true) {
      chrome.storage.sync.set({ total: 0 });
      $("#total").text(0);
    }
  });
});
