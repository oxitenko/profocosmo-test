import {ConfigProvider} from 'antd';
import {Router} from './Router';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Inter',
				},
			}}
		>
			<Router />
		</ConfigProvider>
	);
}

export default App;
