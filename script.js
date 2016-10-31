var enterButton = $("#enter-button")


onNewValue("person", function(newPerson) {
})
var input = $("#new-item-input")

enterButton.click(function() {
  console.log ("firstname")
    var firstname = input.val();
    console.log (firstname)
    storeValue("userList", {name: firstname})
    $("body").append("Hello " +  firstname + "," + " what is your favorite animal?");
    
  })
})



onNewListItem("userList", function(firstname) {
  console.log(firstname)
})






