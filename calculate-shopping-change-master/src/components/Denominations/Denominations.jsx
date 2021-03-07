import { Money } from "../Money/Money";

export const Denominations = ({ physicalMoneyCounts, currency, errors }) => {
  return (
    <div
      className="mt-3 d-grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
    >
      {!errors?.length ? (
        Object.entries(physicalMoneyCounts)
          .sort((a, b) => b[0] - a[0])
          .map(([value, amount]) => (
            <Money
              key={value}
              amount={amount}
              value={value}
              currency={currency}
            />
          ))
      ) : (
        <div className="alert alert-danger" role="alert">
          {errors.map((errMessage) => (
            <div>{errMessage}</div>
          ))}
        </div>
      )}
    </div>
  );
};
