storeValue("name", "david")
storeValue("person", {name: "bran})

onNewValue("person", function(newPerson) {
  console.log(newPerson)
})