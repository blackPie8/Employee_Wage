const partHour = 4
const fullHour = 8
const perHourWage = 20
let totalWage = 0
let totalHour = 0
let totDays = 0

function randomVal(){
    const val = Math.floor(Math.random()*2)
    return val
}

function randomVal2(){
    const val = Math.floor(Math.random()*3)
    return val
}

function calcWage(n = randomVal2()){

switch(n){
    case 0:
    totalWage += partHour*perHourWage
    totalHour+=partHour
    totDays++
    break

    case 1:
    totalWage += fullHour*perHourWage
    totalHour+=fullHour
    totDays++
    break

    case 2:
    return
    }
}

function monthlyWages(){
    for(let i = 0;i < 20;i++){
        calcWage()    
    }
}

function condMonthlyWages(){
    while(totalHour <= 160 && totDays < 20){
        calcWage()
        }
    }

let val = randomVal()

if(val === 0){
    console.log("Absent")
}
else if(val === 1){
    console.log("Present")

    condMonthlyWages()
    console.log(`Wages for maximum of 20 days Or total working Hours of 160 -> ${totalWage}`);
    // console.log(totalHour);
    // console.log(totDays);
    
}