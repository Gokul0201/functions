//IIFE
let a=[1,2,3,4,5,7,8,9,10,11,12];
(function(a){
    var result="";

    for(i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            result+=a[i]+" ";
        }
    }
        console.log(result);
})(a);


// anonymous Function
let b=[1,2,3,4,5,7,8,9,10,11,12];
let odd = function(b){
    var result="";

    for(i=0;i<b.length;i++)
    {
        if(b[i]%2!==0)
        {
            result+=b[i]+" ";
        }
        
    }
    return result;
 }
        console.log(odd(b))
