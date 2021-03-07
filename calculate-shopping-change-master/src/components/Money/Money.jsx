import { getCurrencyText } from "../../utils/currencyType";

export const Money = ({ amount, value, currency }) => {
    return (
        <div className="card" key={value}>
            <div className="card-body">
                {amount}x{value}{getCurrencyText(currency)}
            </div>
        </div>
    );
}
