
db =firebase.database();


var Light_Row_one = db.ref('Light_Row_one');
      Light_Row_one.on('value', function(snapshot) {
        console.log("Light_Row_one:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
});

      var Light_Row_two = db.ref('Light_Row_two');
      Light_Row_two.on('value', function(snapshot) {
        console.log("Light_Row_two:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 
      var Light_Row_three = db.ref('Light_Row_three');
      Light_Row_three.on('value', function(snapshot) {
        console.log("Light_Row_three:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 
      var Airone = db.ref('Airone');
      Airone.on('value', function(snapshot) {
        console.log("Airone:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 
      var Airtwo = db.ref('Airtwo');
      Airtwo.on('value', function(snapshot) {
        console.log("Airtwo:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 

 var Current = db.ref('Current');
      Current.on('value', function(snapshot) {
        console.log("Current:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 
       var UserinRoom = db.ref('UserinRoom');
      UserinRoom.on('value', function(snapshot) {
        console.log("UserinRoom:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
}); 
