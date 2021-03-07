import { useState } from "react";
import { getCurrencyText } from "./utils/currencyType";

import { Form } from "./components/Form/Form";
import { getChange } from "./services/change-service";
import { Denominations } from "./components/Denominations/Denominations";

const App = () => {
  const [response, setResponse] = useState({});

  const handleSubmit = async (e, form) => {
    e.preventDefault();

    const res = await getChange(form);
    res.currency = form.currency;
    setResponse(res);
  };

  return (
    <div className="app container mt-3 mx-auto" style={{ maxWidth: "600px" }}>
      <h1>Calculate Shopping Change</h1>

      <Form
        handleSubmit={handleSubmit}
      />

      {response.isSuccess && (
        <div className="alert mt-3 alert-success" role="alert">
          Total Change: {response.data.totalChange}
          {getCurrencyText(response.currency)}
        </div>
      )}

      <Denominations 
        errors={response.errors}
        currency={response.currency}
        physicalMoneyCounts={response.data?.physicalMoneyCounts || {}}
      />
    </div>
  );
};

export default App;
