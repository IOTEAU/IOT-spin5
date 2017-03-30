var h2Text = document.getElementById('h2-text');
var dbRef = firebase.database();


var oJt = dbRef.ref('Lamp');
oJt.on('value', function (snapshot) {
    console.log("Lamp:" + snapshot.val());
    var snap = snapshot.val();
    var num0 = 0;
    var num5 = 5;
    var num10 = 10;
    var num15 = 15;
    var num20 = 20;

    while (snap == num0) {
        alert("Off");
    }

    while (snap <= num5) {

        alert("no1");

    } 

    while (snap <= num10) {
        alert("no2");
    }

    while (snap <= num15) {

        alert("on3");

    }
    while (snap <= num15) {

        alert("on4");

    }

});