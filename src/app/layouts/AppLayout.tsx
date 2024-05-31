import Layout, {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';

const AppLayout = () => {
	return (
		<Layout style={{minHeight: '100vh', padding: '30px 0 36px 0', backgroundColor: '#F2F3F7'}}>
			<Content style={{backgroundColor: '#F2F3F7', position: 'relative'}} id='main'>
				<Outlet />
			</Content>
		</Layout>
	);
};

export default AppLayout;
