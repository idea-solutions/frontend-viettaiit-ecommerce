import Button from "./components/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <Button
        type={"primary"}
        text="primary"
        iconLeft={faCheck}
        
      />
      <Button type={"outline-one"} text="outline one" />
      <Button type={"outline-two"} text="outline two" iconRight={faCheck} />
      <Button type={"secondary"} text="secondary" />
    </div>
  );
}

export default App;
