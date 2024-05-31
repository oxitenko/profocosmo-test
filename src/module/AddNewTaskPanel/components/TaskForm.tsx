import classes from '../styles.module.scss';
import {Button, Flex, Typography, Input as AntInput, Form as AntForm} from 'antd';
import {useFormik} from 'formik';
import {useStore} from '../../../app/store/appStore';
import * as Yup from 'yup';

interface Props {
	onClose: () => void;
}

const newTaskValidationSchema = Yup.object().shape({
	name: Yup.string().min(3, 'Не менее 3 символов').max(25, 'Не более 25 символов').required('Обязательное поле'),
	email: Yup.string().email('Невалидный адрес электронной почты').required('Обязательное поле'),
	text: Yup.string().max(90).optional(),
});

const TaskForm = ({onClose}: Props) => {
	const addTask = useStore((state) => state.setState);
	const ID = useStore((state) => state.tasks.length);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			text: '',
		},
		onSubmit: (values) => {
			console.log(values);
			addTask({
				id: ID + 1,
				name: values.name,
				email: values.email,
				text: values.text,
				complite: false,
			});

			formik.resetForm();
			onClose();
		},
		validationSchema: newTaskValidationSchema,
	});

	return (
		<Flex vertical gap={12} className={classes.formWrapper}>
			<Typography.Text className={classes.formTitle}>Описание задачи</Typography.Text>
			<AntForm className={classes.form} onFinish={formik.handleSubmit}>
				<Flex vertical>
					<AntInput
						placeholder='Название задачи'
						name='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<span className={classes.error}>{formik.errors.name}</span>
				</Flex>
				<Flex vertical>
					<AntInput
						name='email'
						placeholder='Email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<span className={classes.error}>{formik.errors.email}</span>
				</Flex>
				<Flex vertical>
					<AntInput.TextArea
						placeholder='Что нужно сделать?'
						name='text'
						value={formik.values.text}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						maxLength={90}
						showCount
					/>
					<span className={classes.error}>{formik.errors.text}</span>
				</Flex>
				<Button
					type='primary'
					disabled={!formik.isValid || formik.isSubmitting}
					size='middle'
					htmlType='submit'
					style={{marginTop: '24px'}}
				>
					Поставить задачу
				</Button>
			</AntForm>
		</Flex>
	);
};

export default TaskForm;
