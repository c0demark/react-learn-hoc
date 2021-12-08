import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SimpleTable = ({ columns, rows }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map(({ dataKey, label }) => <TableCell key={dataKey}>{label}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							{columns.map(({ dataKey }) => <TableCell key={dataKey}>{row[dataKey]}</TableCell>)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default SimpleTable;
