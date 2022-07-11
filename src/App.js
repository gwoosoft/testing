import "./styles.css";
import BeerComponent from "./Beercomponent";
import FormComponent from "./FormComponent";
import { AppLayout } from "@awsui/components-react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FormComponent />
      <BeerComponent />
    </div>
  );
}
