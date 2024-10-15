import "./App.css";
import { MainContextProvider } from "./context/mainContext";
import MyRoutes from "./routes/myRoutes";

function App() {
    return (
        <div className="appWrapper">
            <MainContextProvider>
                <MyRoutes />
            </MainContextProvider>
        </div>
    );
}

export default App;
