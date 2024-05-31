import {Button, Flex} from 'antd';
import {useState} from 'react';
import TaskModal from './components/TaskModal';

const AddNewTaskPanel = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Flex justify='center'>
			<Button type='primary' size='middle' onClick={() => setIsModalOpen(true)}>
				Добавить задачу
			</Button>
			<TaskModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</Flex>
	);
};

export default AddNewTaskPanel;
