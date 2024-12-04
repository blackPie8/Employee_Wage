function randomVal(){
    const val = Math.floor(Math.random()*2)
    return val
}

let val = randomVal()

if(val === 0){
    console.log("Absent")
}

else if(val === 1){
    console.log("Present")        
}