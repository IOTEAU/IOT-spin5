
var dbRef =firebase.database();

   var btn1 = dbRef.ref('Lamp1');
      btn1.on('value', function(snapshot) {
        console.log("lamp1:"+snapshot.val());
        document.querySelector("#lampface > input").checked = snapshot.val();
});
       var btn2 = dbRef.ref('Lamp2');
      btn2.on('value', function(snapshot) {
        console.log("lamp2:"+snapshot.val());
        document.querySelector("#Lampnext > input").checked = snapshot.val();
});
       var btn3 = dbRef.ref('Lamp3');
      btn3.on('value', function(snapshot) {
        console.log("lamp3:"+snapshot.val());
        document.querySelector("#lampnext1 > input").checked = snapshot.val();
});
       var btn4 = dbRef.ref('Lamp4');
      btn4.on('value', function(snapshot) {
        console.log("lamp4:"+snapshot.val());
        document.querySelector("#lampnext2 > input").checked = snapshot.val();
});
     

// btn+x = dbRef.ref('lamp'+ x);
//       btn+x.on('value', function(snapshot) {
//         console.log("lamp"+x":"+snapshot.val());
// });

