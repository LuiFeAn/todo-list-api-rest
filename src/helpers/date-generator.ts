
const date = new Date();

export function positiveDate(){

    return new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`);

}

export function negativeDate(){

    return new Date(`${date.getFullYear() -1 }/${date.getMonth() + 1}/${date.getDate()}`);

}