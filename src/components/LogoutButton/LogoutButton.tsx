import {Button} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../app/routes';

const LogoutButton = () => {
	const navigate = useNavigate();

	return (
		<Button onClick={() => navigate(routesLinksEnum.login)} type='primary' size='large' icon={<LogoutOutlined />}>
			Выйти
		</Button>
	);
};

export default LogoutButton;
