import {useFormik} from 'formik';
import classes from './styles.module.scss';
import {Form as AntForm, Input as AntInput, Button, Card, Flex, Typography} from 'antd';
import * as Yup from 'yup';
import {authUsers} from '../../../app/store/users';
import {useAuth} from '../../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../../app/routes';

const LoginForm = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const loginValidationSchema = Yup.object().shape({
		email: Yup.string().email('Невалидный адрес электронной почты').required('Обязательное поле'),
		password: Yup.string().required('Обязательное поле'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: async (values) => {
			const validEmail = authUsers.some((i) => i.login === values.email);
			const validPassword = authUsers.some((i) => i.password === values.password);
			if (validEmail && validPassword) {
				await auth?.login(values.email);
				navigate(routesLinksEnum.main);
				formik.resetForm();
			} else {
				formik.setErrors({
					email: 'Неверный логин или пароль',
					password: 'Неверный логин или пароль',
				});
			}
		},
		validationSchema: loginValidationSchema,
	});

	return (
		<Card className={classes.login}>
			<Flex vertical>
				<Typography.Title className={classes.title}>SignIn</Typography.Title>
				<AntForm onFinish={formik.handleSubmit} className={classes.form}>
					<Flex vertical>
						<AntInput
							placeholder='Электронная почта'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<span className={classes.error}>{formik.errors.email}</span>
					</Flex>
					<Flex vertical>
						<AntInput.Password
							placeholder='Пароль'
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<span className={classes.error}>{formik.errors.password}</span>
					</Flex>
					<Button type='primary' size='middle' htmlType='submit'>
						Войти
					</Button>
				</AntForm>
			</Flex>
		</Card>
	);
};

export default LoginForm;
