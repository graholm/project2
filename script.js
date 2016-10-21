storeValue("name", "david")
storeValue("person", {name: "grace"})

addListItem("userList", {name: "D"})   

onNewListItem("userList", function(user){
})

onNewValue("person", function(newPerson) {

})


var name = $("#new-item-input")
name.keydown(function(e) {	
  if (e.keyCode == "13") {
    var firstname = input.val();
    console.log (firstname)
   // addListItem("graceList", valueToSave);
  }
})