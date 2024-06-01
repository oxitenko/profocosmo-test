import {Flex} from 'antd';
import TaskItems from '../../module/TaskItems/TaskItems';
import AddNewTaskPanel from '../../module/AddNewTaskPanel/AddNewTaskPanel';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Filter from '../../module/Filter/Filter';

const MainPage = () => {
	return (
		<Flex vertical gap={12}>
			<Flex justify='center' gap={30}>
				<Filter />
				<AddNewTaskPanel />
				<LogoutButton size='middle' />
			</Flex>
			<TaskItems />
		</Flex>
	);
};

export default MainPage;
