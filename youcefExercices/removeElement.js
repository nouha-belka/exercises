arr = [ -3,3,3,3, 8, 7, 6, 5, -4, 3, 2, 1,3];

var element = 3;
i = 0;
while(i < arr.length){
    if(arr[i] == element){
        //console.log(i); 
        for(j = i; j < arr.length -1 ; j++){
            arr[j] = arr[j+1];
        }
        arr.length = arr.length - 1;
    } 
    else{i = i + 1;}
}

console.log(arr)