import Layout, {Content} from 'antd/es/layout/layout';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';
import {routesLinksEnum} from '../routes';

const LoginLayout = () => {
	const auth = useAuth();

	if (auth.user) {
		return <Navigate to={routesLinksEnum.main} />;
	}

	return (
		<Layout style={{minHeight: '100vh', padding: '30px 0 36px 0', backgroundColor: '#F2F3F7'}}>
			<Content style={{backgroundColor: '#F2F3F7', position: 'relative'}} id='main'>
				<Outlet />
			</Content>
		</Layout>
	);
};

export default LoginLayout;
