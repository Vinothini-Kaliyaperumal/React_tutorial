export const name = "Jesse"
export const age = 40

// const place = "Tnj"
// const klm = 40
// console.log(klm)
// export { place, klm }

export function add(a, b){
    console.log(a + b)
    return a + b;
}

export function mul(a, b){
    console.log(a * b)
    return a * b;
}

 function sub(a, b){
    console.log(a - b)
    return a - b;
}

export {sub}

export default function greetMessage(name){
    console.log(`Hello ${name}`);
    return `Hello ${name}`
}