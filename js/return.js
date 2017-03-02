
var dbRef =firebase.database();

   var btn1 = dbRef.ref('lamp1');
      btn1.on('value', function(snapshot) {
        console.log("lamp1:"+snapshot.val());
});
       var btn2 = dbRef.ref('lamp2');
      btn2.on('value', function(snapshot) {
        console.log("lamp2:"+snapshot.val());
});
       var btn3 = dbRef.ref('lamp3');
      btn3.on('value', function(snapshot) {
        console.log("lamp3:"+snapshot.val());
});
       var btn4 = dbRef.ref('lamp4');
      btn4.on('value', function(snapshot) {
        console.log("lamp4:"+snapshot.val());
});
       var btn5 = dbRef.ref('lamp5');
      btn5.on('value', function(snapshot) {
        console.log("lamp5:"+snapshot.val());
});
       var btn6 = dbRef.ref('lamp6');
      btn6.on('value', function(snapshot) {
        console.log("lamp6:"+snapshot.val());
});
       var btn7 = dbRef.ref('lamp7');
      btn7.on('value', function(snapshot) {
        console.log("lamp7:"+snapshot.val());
});
       var btn8 = dbRef.ref('lamp8');
      btn8.on('value', function(snapshot) {
        console.log("lamp8:"+snapshot.val());
});
       var btn9 = dbRef.ref('lamp9');
      btn9.on('value', function(snapshot) {
        console.log("lamp9:"+snapshot.val());
});
       var btn10 = dbRef.ref('lamp10');
      btn10.on('value', function(snapshot) {
        console.log("lamp10:"+snapshot.val());
});
       var btn11 = dbRef.ref('lamp11');
      btn11.on('value', function(snapshot) {
        console.log("lamp11:"+snapshot.val());
});
       var btn12 = dbRef.ref('lamp12');
      btn12.on('value', function(snapshot) {
        console.log("lamp12:"+snapshot.val());
});
       var btn13 = dbRef.ref('lamp13');
      btn13.on('value', function(snapshot) {
        console.log("lamp13:"+snapshot.val());
});
       var btn14 = dbRef.ref('lamp14');
      btn14.on('value', function(snapshot) {
        console.log("lamp14:"+snapshot.val());
});
      var btn15 = dbRef.ref('lamp15');
      btn15.on('value', function(snapshot) {
        console.log("lamp15:"+snapshot.val());
});


// btn+x = dbRef.ref('lamp'+ x);
//       btn+x.on('value', function(snapshot) {
//         console.log("lamp"+x":"+snapshot.val());
// });

