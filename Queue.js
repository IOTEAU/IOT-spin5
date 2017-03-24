
var Q = new Queue();
var getArray = [24,245,45,56,67,9]


if (getArray == '') {

    console.log(".....")

} else {

    myLoop(getArray);

}



function myLoop(item) {



    for (var i = 0; i < item.length; i++) {
        Q.enqueue(item[i]);
        
    }

    
    for (var i = 0; i < item.length; i++) {
        
//         // var time= setTimeout(Q.dequeue(), 3000);
 console.log(Q.dequeue())

 
 // console.log(Q.dequeue())

   }

}



function Queue() {
    this.stac = new Array();
    this.dequeue = function() {
    	
        return this.stac.pop();
    }
    this.enqueue = function(item) {
        this.stac.unshift(item);
    }

}

function testWite() {
    setTimeout(function() {}, 3000);
}



