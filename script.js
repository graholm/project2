storeValue("name", "david")
storeValue("person", {name: "grace"})

onNewValue("person", function(newPerson) {
  console.log(newPerson)
})