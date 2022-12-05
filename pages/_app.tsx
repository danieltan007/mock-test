// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default App;
