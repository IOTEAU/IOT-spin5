
var Q = new Queue();
var getArray = [24,245,45,56,67,9]


if (getArray == '') {

    console.log(".....")

} else {

    myLoop(getArray);

}



function myLoop(item) {



    for (var i = 0; i < item.length; i++) {
        var sum=Q.enqueue(item[i]);
        
    }
chackQueue(sum)
    
//     for (var i = 0; i < item.length; i++) {
        
// //         // var time= setTimeout(Q.dequeue(), 3000);
//  console.log(Q.dequeue())

 
//  // console.log(Q.dequeue())

//    }

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



function chackQueue(queue){
    if (queue <= 50) {
        openAir();
    }else{
         setTimeout(function(){},3000);
        openAir();
    }
}

function openAir(){
    for(var i =1;i<=item.length;i++){
   var open= Q.dequeue() //pull val out Queue
}
console.log(open)
}



