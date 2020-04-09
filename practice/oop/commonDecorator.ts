interface ISum {
    (...args: number[]): number
}

let sum: ISum

const noisy = (func: ISum): ISum => {
    const wrapper = (...args: number[]) => {
        console.log('ppphhhhffffchfiu')
        const res = func(...args)
        console.log(res)
        console.log('khhhhheeeeeefffph')
        return res
    }
return wrapper
}


sum = (a, b) => (a + b)
const noisySum: ISum = noisy(sum)

noisySum(1, 15)
