export function toHexDisplay(value: number): string {
    return "0x" + value.toString(16).padStart(2, '0').toUpperCase();
}
