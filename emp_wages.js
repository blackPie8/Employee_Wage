const partHour = 4
const fullHour = 8
const perHourWage = 20
let totalWage = 0

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
        break
    
        case 1:
        totalWage += fullHour*perHourWage
        break

        case 2:
        return
        }
    }

let val = randomVal()

if(val === 0){
    console.log("Absent")
}
else if(val === 1){
    console.log("Present")
    calcWage()
     console.log(`Wage for a day -> ${totalWage}`)           
}