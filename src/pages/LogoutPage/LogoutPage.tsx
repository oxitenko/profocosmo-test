import classes from './styles.module.scss';
import {Card, Flex, Typography} from 'antd';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

const LogoutPage = () => {
	return (
		<Flex vertical justify='center' style={{height: '80vh'}}>
			<Card className={classes.logout}>
				<Flex vertical gap={36}>
					<Typography className={classes.title}>Хотите выйти из аккаунта?</Typography>
					<LogoutButton />
				</Flex>
			</Card>
		</Flex>
	);
};

export default LogoutPage;
