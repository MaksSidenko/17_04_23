import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisiable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisiable && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h1>Alert!!!!!!!</h1>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        <h2>button</h2>
      </Button>
    </div>
  );
}

export default App;
