import {Flex} from 'antd';
import TaskItems from '../../module/TaskItems/TaskItems';
import AddNewTaskPanel from '../../module/AddNewTaskPanel/AddNewTaskPanel';

const MainPage = () => {
	return (
		<Flex vertical gap={12}>
			<AddNewTaskPanel />
			<TaskItems />
		</Flex>
	);
};

export default MainPage;
