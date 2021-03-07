import { useState } from "react";
import currencies from "../../utils/currencyType";
import { NumberInput } from "./NumberInput";
import { CurrencyDropdown } from "./CurrencyDropdown";

export const Form = ({ handleSubmit }) => {
  const [form, setForm] = useState({
    givenMoneyAmount: "0",
    shoppingCostAmount: "0",
    currency: currencies[0]?.key || 1,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    setLoading(true);

    await handleSubmit(e, form);

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <NumberInput
        label="Payment Amount"
        name="givenMoneyAmount"
        value={form.givenMoneyAmount}
        onChange={handleInputChange}
        required
      />
      <NumberInput
        label="Shopping Cost Amount"
        name="shoppingCostAmount"
        value={form.shoppingCostAmount}
        onChange={handleInputChange}
        required
      />
      <CurrencyDropdown
        label="Currency"
        name="currency"
        value={form.currency}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-primary" disabled={loading}>
        Submit
      </button>
    </form>
  );
};
