import classes from './styles.module.scss';
import {Button, Flex, Input, Radio, Typography, Drawer} from 'antd';
import {FilterOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {useStore} from '../../app/store/appStore';

const Filter = () => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [complete, setComplete] = useState(null);
	const [sortOrder, setSortOrder] = useState('');

	const applyFilters = useStore((state) => state.applyFilters);
	const setFilters = useStore((state) => state.setFilters);
	const setSortById = useStore((state) => state.setSortById);
	const resetFilters = useStore((state) => state.resetFilters);

	const resetFields = () => {
		setName('');
		setEmail('');
		setComplete(null);
		setSortOrder('');
	};

	const handleApplyFilters = () => {
		setFilters({name, email, complete});
		setSortById(sortOrder);
		applyFilters();
		setFilterOpen(false);
		resetFields();
	};

	const handleResetFilters = () => {
		resetFilters();
		resetFields();
		setFilterOpen(false);
	};

	return (
		<>
			<Button type='primary' size='middle' icon={<FilterOutlined />} onClick={() => setFilterOpen(true)}>
				Фильтры
			</Button>
			<Drawer
				destroyOnClose={true}
				title='Фильтры'
				placement='left'
				onClose={() => setFilterOpen(false)}
				open={filterOpen}
			>
				<Flex vertical gap={24} className={classes.filterWrapper}>
					<Flex vertical gap={12}>
						<Typography className={classes.title}>По названию задачи</Typography>
						<Input value={name} onChange={(e) => setName(e.target.value)} />
					</Flex>
					<Flex vertical gap={12}>
						<Typography className={classes.title}>По адресу электронной почты</Typography>
						<Input value={email} onChange={(e) => setEmail(e.target.value)} />
					</Flex>
					<Flex vertical gap={12}>
						<Typography className={classes.title}>По статусу</Typography>
						<Radio.Group className={classes.radio} value={complete} onChange={(e) => setComplete(e.target.value)}>
							<Radio value={true}>Выполнена</Radio>
							<Radio value={false}>Не выполнена</Radio>
						</Radio.Group>
					</Flex>
					<Flex vertical gap={12}>
						<Typography className={classes.title}>По ID</Typography>
						<Radio.Group className={classes.radio} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
							<Radio value={'asc'}>По возрастанию</Radio>
							<Radio value={'desk'}>По убыванию</Radio>
						</Radio.Group>
					</Flex>
					<Button type='primary' size='middle' onClick={handleApplyFilters}>
						Применить фильтры
					</Button>
					<Button type='primary' size='middle' onClick={handleResetFilters}>
						Сбросить фильтры
					</Button>
				</Flex>
			</Drawer>
		</>
	);
};

export default Filter;
