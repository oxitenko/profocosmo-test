import {EditOutlined, SaveOutlined} from '@ant-design/icons';
import classes from './styles.module.scss';
import {Badge, Button, Card, Flex, Input, Select, Tooltip, Typography} from 'antd';
import {useState} from 'react';
import {useStore} from '../../app/store/appStore';

interface Props {
	id: number;
	name: string;
	text?: string;
	email: string;
	complete?: boolean;
	isAdminUser?: boolean;
}

const TaskItem = ({id, name, text, email, complete, isAdminUser}: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editingText, setEditingText] = useState(text);
	const [editingStatus, setEditingStatus] = useState(complete);
	const editTask = useStore((state) => state.editTask);

	const handleEditMode = () => {
		setIsEditing(true);
	};

	const handleSaveEdits = () => {
		editTask(id, editingText, editingStatus);
		setIsEditing(false);
	};

	return (
		<Card className={classes.taskCard}>
			<Flex gap={12} vertical>
				<Flex gap={8} align='center'>
					{!isEditing ? (
						complete ? (
							<>
								<Badge status='success' />
								<Typography.Text className={classes.text}>Выполнена</Typography.Text>
							</>
						) : (
							<>
								<Badge status='processing' />
								<Typography.Text className={classes.text}>Не выполнена</Typography.Text>
							</>
						)
					) : (
						<Select
							onChange={(value) => setEditingStatus(value)}
							style={{width: '138px'}}
							size='small'
							defaultValue={editingStatus}
							options={[
								{value: true, label: 'Выполнена'},
								{value: false, label: 'Не выполнена'},
							]}
						/>
					)}
					{isAdminUser && (
						<Tooltip
							title={!isEditing ? 'Редактировать' : 'Сохранить'}
							color={!isEditing ? 'blue' : 'green'}
							placement='rightTop'
						>
							<Button
								style={{margin: '0 0 0 auto'}}
								type='default'
								shape='circle'
								size='small'
								icon={!isEditing ? <EditOutlined /> : <SaveOutlined />}
								onClick={!isEditing ? handleEditMode : handleSaveEdits}
							></Button>
						</Tooltip>
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
				{!isEditing ? (
					<Typography className={classes.label}>
						Что нужно сделать: <span className={classes.text}>{text ? text : '┐(シ)┌'}</span>
					</Typography>
				) : (
					<Input.TextArea
						maxLength={90}
						style={{height: '54px', resize: 'none'}}
						value={editingText}
						onChange={(e) => setEditingText(e.target.value)}
					/>
				)}
			</Flex>
		</Card>
	);
};

export default TaskItem;
