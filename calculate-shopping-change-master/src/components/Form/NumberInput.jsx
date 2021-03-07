export const NumberInput = ({
    label,
    value,
    onChange,
    required,
    name,
}) => {

    return (
        <div className="mb-3">
            <label
                htmlFor={name}
                className="form-label"
            >
                {label}
            </label>
            <input
                type="number"
                step="0.01"
                className="form-control"
                name={name}
                id={name}
                min="0"
                max="100000000000"
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}