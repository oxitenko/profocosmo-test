import classes from './styles.module.scss';
import {Badge, Card, Flex, Typography} from 'antd';

interface Props {
	id?: number;
	name: string;
	text?: string;
	email: string;
	complite?: boolean;
}

const TaskItem = ({id, name, text, email, complite}: Props) => {
	return (
		<Card className={classes.taskCard}>
			<Flex gap={12} vertical>
				<Flex gap={8} align='center'>
					{complite ? (
						<>
							<Badge status='success' />
							<Typography.Text className={classes.text}>Выполнена</Typography.Text>
						</>
					) : (
						<>
							<Badge status='processing' />
							<Typography.Text className={classes.text}>Не выполнена</Typography.Text>
						</>
					)}
				</Flex>
				<Flex justify='space-between'>
					<Typography.Text className={classes.title}>{name}</Typography.Text>
					<Typography className={classes.label}>
						ID: <span className={classes.text}>{id}</span>
					</Typography>
				</Flex>
				<Typography className={classes.label}>
					Email: <span className={classes.text}>{email}</span>
				</Typography>
				<Typography className={classes.label}>
					Что нужно сделать: <span className={classes.text}>{text ? text : '┐(シ)┌'}</span>
				</Typography>
			</Flex>
		</Card>
	);
};

export default TaskItem;
