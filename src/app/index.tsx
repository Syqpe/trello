import { Routing } from "../pages/index";
import { StoresLayout } from "./layouts";

import "./index.scss";

function App() {
    return (
        <StoresLayout>
            <Routing />
        </StoresLayout>
    );
}

export default App;
