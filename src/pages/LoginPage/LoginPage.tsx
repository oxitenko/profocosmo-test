import {Flex} from 'antd';
import LoginForm from '../../module/Login/LoginForm/LoginForm';

const LoginPage = () => {
	return (
		<Flex justify='center' align='center' style={{height: '80vh'}}>
			<LoginForm />
		</Flex>
	);
};

export default LoginPage;
