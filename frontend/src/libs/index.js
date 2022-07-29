export const getLink = name => {
    if(name[0] === '#') {
        const word = name.slice(1)
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return name.charAt(0).toUpperCase() + name.slice(1)
}