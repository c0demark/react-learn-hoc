import React, { useState, useEffect } from "react";
import { withLoading } from "../../hoc/withLoading";
import { getFakeData } from "../../services/apiCall";
import { SimpleTable } from "../SimpleTable";

const LoadingDemo = ({ setLoading, ...props }) => {
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


	return <SimpleTable { ...props} columns={columns} rows={rows} />
};

export default withLoading(LoadingDemo);
