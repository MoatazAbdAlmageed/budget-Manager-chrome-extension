$(() => {
  $("#name_input").keyup(() => {
    $("#user_name").text($("#name_input").val());
  });
  $("#changeColor").click(() => {
    alert("ckicked");
  });
});
