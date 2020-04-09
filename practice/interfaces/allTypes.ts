// objects

interface ICustomResponse {
    apiVersion: string;
    prevResponse?: number;
    [propName: string]: any;
}

const stubResponse: ICustomResponse = {
    apiVersion: 'v3',
    who: 'are',
    you: '?',
}

console.log(stubResponse)


// functions

interface ImakeBig {
    (text: string, times?: number): string
}

let makeBig: ImakeBig

makeBig = (text, times=1) => (
    `${"I".repeat(times)} * ${text} * ${"I".repeat(times)}`
)

console.log(makeBig('martin', 7))
