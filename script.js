onNewValue("person", function(newPerson) {
})
var input = $("#new-item-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var firstname = input.val();
    console.log (firstname)
    storeValue("userList", {name: firstname})
    $("body").append("Hello, " +  firstname );
  }
})

onNewListItem("userList", function(firstname) {
  console.log(firstname)
})






