onNewValue("person", function(newPerson) {
})
var input = $("#new-item-input")

enterButton.click(function() {
    var firstname = input.val();
    console.log (firstname)
    storeValue("userList", {name: firstname})
    $("body").append("Hello " +  firstname + "," + " what is your favorite animal?");
   var element = document.createElement("input");
    
  })
})



onNewListItem("userList", function(firstname) {
  console.log(firstname)
})






