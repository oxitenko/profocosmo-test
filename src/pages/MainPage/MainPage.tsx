import {Flex} from 'antd';
import TaskItems from '../../module/TaskItems/TaskItems';
import AddNewTaskPanel from '../../module/AddNewTaskPanel/AddNewTaskPanel';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

const MainPage = () => {
	return (
		<Flex vertical gap={12}>
			<Flex justify='center' gap={32}>
				<AddNewTaskPanel />
				<LogoutButton size='middle' />
			</Flex>
			<TaskItems />
		</Flex>
	);
};

export default MainPage;
