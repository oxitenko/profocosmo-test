import {Flex} from 'antd';
import {useStore} from '../../app/store/appStore';
import TaskItem from '../../components/TaskItem/TaskItem';
import Pagination from '../../components/Pagination/Pagination';
import {useEffect, useState} from 'react';
import {admin} from '../../app/store/users';

const TaskItems = () => {
	const tasksList = useStore((state) => state.tasks);
	const filteredTasks = useStore((state) => state.filteredTasks);
	const [current, setCurrent] = useState(1);
	const [isAdminUser, setIsAdminUser] = useState<boolean>();
	const pageSize = 3;
	const indexOfLastItem = current * pageSize;
	const indexOfFirstItem = indexOfLastItem - pageSize;

	const handlePageChange = (page: number) => {
		setCurrent(page);
	};

	useEffect(() => {
		const logined = window.localStorage.getItem('user');
		if (logined !== null) {
			const user = JSON.parse(logined);
			user === admin ? setIsAdminUser(true) : setIsAdminUser(false);
		}
	}, []);

	return (
		<>
			<Flex vertical gap={12} style={{margin: '0 auto'}}>
				{(filteredTasks.length ? filteredTasks : tasksList).slice(indexOfFirstItem, indexOfLastItem).map((item) => (
					<TaskItem
						key={item.id}
						id={item.id}
						name={item.name}
						text={item.text}
						email={item.email}
						complete={item.complete}
						isAdminUser={isAdminUser}
					/>
				))}
			</Flex>
			<Pagination
				total={filteredTasks.length ? filteredTasks.length : tasksList.length}
				pageSize={pageSize}
				current={current}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default TaskItems;
