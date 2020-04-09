export type TOrder = {
    id: number,
    timestamp: number,
    name: string,
    addr: {
        city: string,
        index: number,
        street: string,
        building: string,
    },
    comment: string,
}

