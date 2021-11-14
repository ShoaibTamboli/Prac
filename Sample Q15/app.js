let person1={
    name:"Ram",  
    age:"20",
    power:2500,
}

let person2={
    name:" Krishna",  
    age:"20",
    power: 26251,
}

function result() {
    if(person1.power > person2.power){
        console.log(person1.name +" has more power")
    }else{
        console.log(person2.name +" has more power")
    }

}

result()