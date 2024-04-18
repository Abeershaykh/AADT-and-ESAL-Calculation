let a= 0.9978
let b= 1.044
let c= (1+(0.02*8))*(a*b)

let vehicle= ["Car","Bus", "Truck", "Tanker", "Trailer"];
let count= [100,129,2604,899,458]

for (let i=0; i<vehicle.length; i++){
    let calculation: number= count[i]*c
    let formcalculation = calculation.toFixed()
    console.log(`${vehicle[i]} 24hr AADT is ${formcalculation}`)
}

// Calculating Growth Factor
console.log("The Growth Factor is as follows")
let growthrate:number[] = [0.065,0.0416,0.0416,0.045,0.0675,0]
let year= 20
for (let i=0; i<growthrate.length;i++){
    // let growthfactor = ((1+growthrate[i]**year) -1)/growthrate[i]
    let growthfactor = (((1+growthrate[i])**year) -1)/(growthrate[i])
    growthfactor=growthfactor.toFixed(2)
    console.log(`${vehicle[i]} Growth Factor is ${growthfactor}`)
}

// Load Calculations
let axle2 = [
    {front:0.31},
    {back:0.69}
] 
let tonnestokilopounds= 2.2205