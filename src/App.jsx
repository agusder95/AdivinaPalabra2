import "./App.css";
import { MainContextProvider } from "./context/mainContext";
import { ScoreContextProvider } from "./context/scoreContext";
import MyRoutes from "./routes/myRoutes";

function App() {
    return (
        <div className="appWrapper">
            <MainContextProvider>
                <ScoreContextProvider>
                    <MyRoutes />
                </ScoreContextProvider>
            </MainContextProvider>
        </div>
    );
}

export default App;
