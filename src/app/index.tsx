import { Routing } from "@pages/";
import { QueryClientProvider } from "@API/";

import "./index.scss";

function App() {
    return (
        <QueryClientProvider>
            <div className="App">
                <Routing />
            </div>
        </QueryClientProvider>
    );
}

export default App;
