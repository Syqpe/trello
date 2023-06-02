import { Routing } from "@pages/";
import { DefaultLayout, MainLayout } from "./layouts";

import "./index.scss";

function App() {
    return (
        <DefaultLayout>
            <MainLayout>
                <div className="App">
                    <Routing />
                </div>
            </MainLayout>
        </DefaultLayout>
    );
}

export default App;
