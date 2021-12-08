import React, { useEffect, useState } from 'react';
import { withExpandButton } from '../../hoc/withExpandButton';
import { withVirtualizedTable } from '../../hoc/withVirtualizedTable';
import { withLoading } from '../../hoc/withLoading';
import { getFakeData } from '../../services/apiCall';
import { SimpleTable } from '../SimpleTable';

const WrappedTable = withExpandButton(withVirtualizedTable(SimpleTable));

export const CombinedDemo = ({ setLoading, ...props }) => {

	const [columns, setColumns] = useState([]);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			const { columns, rows } = getFakeData();
			setColumns(columns);
			setRows(rows);
			setLoading(false);
		}, 5000);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <WrappedTable { ...props} columns={columns} rows={rows} />;
};

export default withLoading(CombinedDemo);
