import TaskForm from './TaskForm';
import {Modal as AntdModal} from 'antd';

interface Props {
	open: boolean;
	onClose: () => void;
}

const TaskModal = ({open, onClose}: Props) => {
	return (
		<AntdModal open={open} onCancel={onClose} footer={false} destroyOnClose={true}>
			<TaskForm onClose={onClose} />
		</AntdModal>
	);
};

export default TaskModal;
