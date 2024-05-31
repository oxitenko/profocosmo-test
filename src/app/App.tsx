import {ConfigProvider} from 'antd';
import {Router} from './Router';
import {AuthProvider} from '../hooks/useAuth';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Inter',
				},
			}}
		>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</ConfigProvider>
	);
}

export default App;
