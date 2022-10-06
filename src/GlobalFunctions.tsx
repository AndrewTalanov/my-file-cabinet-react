export function setStyles(...array: string[]): string {

    let styles: string = '';

    array.forEach(el => {
        styles += el + " ";
    });
     
    return styles;
}
