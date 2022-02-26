let reverse = (str)=>{
    let reversedString = ''
    for(i=str.length;i>0;i--){
        reversedString += str[i];
    }
    return reversedString
}
let reversed = reverse("reverse");
console.log(reversed);



