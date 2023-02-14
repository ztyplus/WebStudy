for(i = arr.length - 1; i >= 0 ; i--){
  if(arr[i] % 2 !== 0 && i !== index){
    sum += arr[i];
    break;
  }
}