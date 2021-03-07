import currencies from "../../utils/currencyType";

export const CurrencyDropdown = ({
    name,
    label,
    value,
    onChange,
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <select
                className="form-select"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            >
                {
                    currencies.map((item) => (
                        <option
                            key={item.key}
                            value={item.key}
                        >
                            {item.name} ({item.text})
                        </option>
                    ))
                }
            </select>
        </div>
    );
}