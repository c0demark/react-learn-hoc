import React, { useEffect, useState } from "react";
import { withExpandButton } from "../../hoc/withExpandButton";
import { getFakeData } from "../../services/apiCall";
import { SimpleTable } from "../SimpleTable";

const ExportButtonComponent = (props) => {
	const [columns, setColumns] = useState([]);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		const { columns, rows } = getFakeData();
		setColumns(columns);
		setRows(rows);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return <SimpleTable { ...props} columns={columns} rows={rows} />
};

export default withExpandButton(ExportButtonComponent);
