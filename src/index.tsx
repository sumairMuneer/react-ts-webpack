import {StrictMode} from "react";
import App from "./App";
import { createRoot } from "react-dom/client";


// const App: any= () => <div>Hello, world!</div>;
const rootElement = document.getElementById("root") as HTMLElement;


const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );