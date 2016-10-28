var firebaseConfig = {
  apiKey: "AIzaSyAWFYFxovaCrIuQbOxApTxnVQASlRkmkok",
  authDomain: "projectinclass-c09b6.firebaseapp.com",
  databaseURL: "https://projectinclass-c09b6.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);



var store = firebase.database().ref("challenge-3")

function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child("vars" + "/" + name).remove()
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    callback(data.val());
  })
}