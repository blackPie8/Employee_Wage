const partHour = 4
const fullHour = 8
const perHourWage = 20
let totalWage = 0
let totalHour = 0
let totDays = 0
let yearlyWage = 0
let yearlyHours = 0

let data = []
let months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

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

    function twelveMonths(){
        for(let i = 1; i <= 12;i++){
            monthlyWages()
            yearlyWage += totalWage
            yearlyHours+= totalHour

            let obj = {
                month : months[i],
                wage : totalWage,
                hour : totalHour
            }

            data.push(obj)
            totalWage = 0
            totalHour = 0    
        }
    }

let val = randomVal()

if(val === 0){
    console.log("Absent")
}
else if(val === 1){
    console.log("Present")

    twelveMonths()
    for(let i = 0;i<data.length;i++){
        console.log(`Month -> ${data[i].month} || Wage -> Re${data[i].wage} || Hours -> ${data[i].hour}`);
    }

    console.log(`Yearly wage -> ${yearlyWage}`);
    console.log(`Yearly Working hours -> ${yearlyHours}`);
    
    
}