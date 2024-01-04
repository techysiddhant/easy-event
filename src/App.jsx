import { BrowserRouter } from "react-router-dom";
import ALLRoutes from "./routes";
const App = () => {
	return (
		<BrowserRouter>
			<ALLRoutes />
		</BrowserRouter>
	);
};

export default App;
