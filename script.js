storeValue("name", "david")
storeValue("person", {name: "grace"})

addListItem("userList", {name: "D"})

onNewListItem("userList", function(user){
  console.log(user)
})

onNewValue("person", function(newPerson) {
  console.log(newPerson)
})