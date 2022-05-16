import axios from "axios"


export async function getData() {
    try {
        const response = await axios.get("https://fakerapi.it/api/v1/custom?_quantity=1&brand=pokemon&model=lastName&version=name");
        return response.data.data
    } catch (error) {
        console.error(error);
    }
}