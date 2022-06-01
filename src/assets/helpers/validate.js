export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validate = regex.test(email);
    return validate;
};

export function isObjEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
}

export function formEmpty(obj) {
    const stringArray = Object.values(obj)
    return stringArray.includes("")
}

export function deleteSigns(string) {
    const response = string.replace(/[$.]/g, '');
    return response
}

export function formatNumbers(num) {
    const res = new Intl.NumberFormat("es-CL", {
        currency: "CLP",
        style: "currency",
    }).format(num)

    return res
}

export function unformat(value) {
    console.log(value)
    console.log(value.replaceAll('$', ''))
    console.log(value.replaceAll('.', ''))
}

export function search(id, array) {
    const found = array.find(element => element.id == id);
    return found
}