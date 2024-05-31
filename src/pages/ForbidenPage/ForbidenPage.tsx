import Button from 'antd/es/button';
import Result from 'antd/es/result';
import {useNavigate} from 'react-router-dom';

const ForbidenPage = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='404'
			title='404'
			subTitle='Извините, страница не существует.'
			extra={
				<Button type='primary' onClick={() => navigate('/')}>
					Вернуться на главную
				</Button>
			}
		/>
	);
};

export default ForbidenPage;
