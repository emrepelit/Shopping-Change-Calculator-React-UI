const currencyType = [
    {
        key: "1",
        name: "Sterlin",
        text: "£"
    },
    {
        key: "2",
        name: "Dollar",
        text: "$"
    },
    {
        key: "3",
        name: "Euro",
        text: "€"
    },
    {
        key: "4",
        name: "TL",
        text: "TL"
    }
];

export const getCurrencyText = (key) => {
    return currencyType.find((currency) => currency.key === key.toString()).text;
}

export default currencyType