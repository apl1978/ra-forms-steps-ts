export const isNotValidDate = (date: string) => {
    const regexDate: RegExp = /([0-9]{4}[.](0[1-9]|1[0-2])[.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{4})/;
    return !regexDate.test(date)
}

export const isNotValidDistance = (distance: string) => {
    const regexDistance: RegExp = /^[+-]?\d+(\.\d+)?$/;
    return !regexDistance.test(distance)
}