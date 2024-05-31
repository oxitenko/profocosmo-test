import classes from './styles.module.scss';
import {Pagination as AntPagination, PaginationProps} from 'antd';

const Pagination = ({total, pageSize, current, onChange}: PaginationProps) => {
	return (
		<div className={classes.pagination}>
			<AntPagination total={total} pageSize={pageSize} current={current} onChange={onChange} />
		</div>
	);
};

export default Pagination;
