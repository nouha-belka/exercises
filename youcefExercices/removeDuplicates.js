arr = [ 1,1,1,2,3,4,4,9,10,10,10];

i = 1;
while(i < arr.length){
    if(arr[i] == arr[i-1]){
        for(j = i; j < arr.length -1 ; j++){
            arr[j] = arr[j+1];
        }
        arr.length = arr.length - 1;
    }
    else{i = i + 1;}
}
console.log(arr)