let name = prompt(`Ismingizni kiriting?`)
let letter = prompt(`Istagan harfingizni kiriting!`)

let lowername = name.toLowerCase()
let lowerletter = letter.toLowerCase()

if( lowername.includes(lowerletter))
   { alert(`Ha, ${lowername} ismida ${lowerletter} harfi mavjud.`)}
else
   { alert(`Yoq, ${lowername} ismida ${lowerletter} harfi mavjud emas.`)}

