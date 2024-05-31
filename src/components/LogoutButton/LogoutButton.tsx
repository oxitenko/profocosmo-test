import {Button, ButtonProps} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../app/routes';
import {useAuth} from '../../hooks/useAuth';

const LogoutButton = ({size = 'large'}: ButtonProps) => {
	const navigate = useNavigate();
	const auth = useAuth();

	const handleLogout = () => {
		auth.logout();
		navigate(routesLinksEnum.login, {replace: true});
	};

	return (
		<Button onClick={handleLogout} type='primary' size={size} icon={<LogoutOutlined />}>
			Выйти
		</Button>
	);
};

export default LogoutButton;
