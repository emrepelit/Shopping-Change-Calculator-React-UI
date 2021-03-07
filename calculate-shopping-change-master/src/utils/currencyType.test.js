import { getCurrencyText } from "./currencyType";

describe('Currencies', () => {
   test.each(
    [
        ["1", "£"],
        [1, "£"],
        ["2", "$"],
        [2, "$"],
        ["3", "€"],
        [3, "€"],
        ["4", "TL"],
        [4, "TL"],
    ]
   )('getCurrencyText - should return correct currency text %p %p', (currency, expected) => {
        const actual = getCurrencyText(currency);
        expect(actual).toBe(expected);
   });
});