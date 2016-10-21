storeValue("name", "david")
storeValue("person", {name: "grace"})

addListItem("userList", {name: "D"})   
onNewListItem("userList", function(user){
})
onNewValue("person", function(newPerson) {
})

var input = $("#new-item-input")
input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var firstname = input.val();
    console.log (firstname)
    addListItem("userList", {name: firstname})
  }
})