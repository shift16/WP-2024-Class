import data from "../data/products.json"

interface Person {
    Name: string,
    Age: number & {__int: never},
    Email: string,

    Address: {
        street: string,
        city: string,
        state: string,
        zip: string
    }
}

// Returns all of the data within the products.json file
export function getAll() {
    return {
        all_data: data as Array<Person>
    }
}

