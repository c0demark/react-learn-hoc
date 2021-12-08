import React from "react";
import { withVirtualizedTable } from "../../hoc/withVirtualizedTable";
import { SimpleTable } from "../SimpleTable";

const VirtualizedTableDemo = ({columns, rows, ...props}) => {
	return <SimpleTable { ...props} columns={columns} rows={rows} />
};

export default withVirtualizedTable(VirtualizedTableDemo);
