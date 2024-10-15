export function add(numbers: string): number {
    if (numbers === "") return 0;
    const formattedNumbers = numbers.replace(/\n/g, ',');
    const numArray = formattedNumbers.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}
  