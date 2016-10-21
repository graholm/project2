storeValue("name", "david")
storeValue("person", {name: "david"})

onNewValue("person", function(newPerson) {
  console.log(newPerson)
})