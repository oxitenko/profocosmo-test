import {Flex} from 'antd';
import {useStore} from '../../app/store/appStore';
import TaskItem from '../../components/TaskItem/TaskItem';
import Pagination from '../../components/Pagination/Pagination';
import {useState} from 'react';

const TaskItems = () => {
	const tasksList = useStore((state) => state.tasks);

	const [current, setCurrent] = useState(1);
	const pageSize = 3;

	const handlePageChange = (page: number) => {
		setCurrent(page);
	};

	const indexOfLastItem = current * pageSize;
	const indexOfFirstItem = indexOfLastItem - pageSize;

	return (
		<>
			<Flex vertical gap={18} style={{margin: '0 auto'}}>
				{tasksList.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
					<TaskItem
						key={index}
						id={item.id}
						name={item.name}
						text={item.text}
						email={item.email}
						complite={item.complite}
					/>
				))}
			</Flex>
			<Pagination total={tasksList.length} pageSize={pageSize} current={current} onChange={handlePageChange} />
		</>
	);
};

export default TaskItems;
