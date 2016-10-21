storeValue("name", "david")
storeValue("person", {name: "grace"})

addListItem("userList", {name: "D"})

onNewListItem("userList", function(user){
  console.log(user)
})

onNewValue("person", function(newPerson) {
  console.log(newPerson)
})


var input = $("#new-item-input")
input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("graceList", valueToSave);
  }
})