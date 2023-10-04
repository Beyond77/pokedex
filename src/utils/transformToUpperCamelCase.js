export const transformToUpperCamelCase = (text) => {
    if(text)
     return text[0].toUpperCase() + text.slice(1);
}