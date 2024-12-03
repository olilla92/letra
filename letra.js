import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const _dirname =path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(_dirname, 'dobasok.txt')

let content
try{
    content = fs.readFileSync(filePath, 'utf-8')
}catch (err){
    console.log(err)
}
console.log('1. feladat')
console.log('\tAdatok beolvasása')

console.log('2. feladat')
let arr = content.split('\n')[0].split(', ').map(Number)
let sum = 0
let backward = 0
for (let i = 0; i < arr.length; i++){
    arr[i] += sum
    if(arr[i] % 10 == 0){
        arr[i] -= 3
        backward++
    }
    sum = arr[i]
}
console.log(arr.join(' '))

console.log('3. feladat')
console.log(`A játék során ${backward} alkalommal lépett létrára.`)
console.log('4. feladat')
console.log(arr[arr.length - 1] >= 45 ? 'A játékot befejezte.' : 'A játékot abbahagyta.')
console.log('5. feladat')
content += '\n'
arr = []
for (let i = 0; i < 18; i++){
    arr.push(randomInt(1, 7))
}
content += arr.join(', ')
try{
    fs.writeFileSync(filePath, content)
} catch (err){
    console.log(err)
}