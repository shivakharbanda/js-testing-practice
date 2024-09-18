function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

function reverseString(string) {
    let reverse = ""
    for (let i = string.length; i --; i >0) {
        reverse += string[i]
    }
    return reverse
}

export {capitalize, reverseString}