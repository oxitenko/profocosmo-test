import Button from 'antd/es/button';
import Result from 'antd/es/result';
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='error'
			title='Что-то пошло не так...'
			subTitle='Попробуйте обновить страницу или вернуться на главную страницу.'
			extra={[
				<Button type='primary' onClick={() => navigate('/')}>
					Вернуться на главную
				</Button>,
			]}
		></Result>
	);
};

export default ErrorPage;
