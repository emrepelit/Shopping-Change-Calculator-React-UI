export const getChange = async ({
    givenMoneyAmount,
    shoppingCostAmount,
    currency,
}) => {
    const queryParams = {
        givenMoneyAmount: parseFloat(givenMoneyAmount),
        shoppingCostAmount: parseFloat(shoppingCostAmount),
        currency: parseInt(currency),
    };

    const changesUrl = `http://localhost:51757/api/changes/GetChange`;

    const response = await fetch(changesUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryParams),
    });
    return response.json();
}