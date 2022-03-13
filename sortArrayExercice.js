arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

for(i = 0; i < arr.length; i++){
    var min = arr[i];
    var pos = i;
    for(j = i; j < arr.length; j++){
        if(arr[j] < min){
            min = arr[j];
            pos = j;
        }
    }
    var temporary = arr[i];
    arr[i] = min;
    arr[pos] = temporary;
    //console.log(min , "  ", pos)
    
}
console.log(arr)