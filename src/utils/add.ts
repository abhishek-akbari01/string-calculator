export function add(numbers: string): number {
    if (numbers === "") return 0;
    let delimiter = ',';

    if (numbers.startsWith('//')) {
        delimiter = numbers[2];
        numbers = numbers.slice(4);
    }
    console.log("numbers-", numbers);
    // console.log("Delimeter-", delimiter);

    const formattedNumbers = numbers.replace(/\n/g, delimiter);
    // console.log("formattedNumbers-", formattedNumbers);

    const numArray = formattedNumbers.split(delimiter).map(Number);
    
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
  