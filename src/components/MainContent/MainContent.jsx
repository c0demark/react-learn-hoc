import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { LoadingDemo } from '../LoadingDemo';
import { ExpandButtonDemo } from '../ExpandButtonDemo';
import { VirtualizedTableDemo } from '../VirtualizedTableDemo';
import { CombinedDemo } from '../CombinedDemo';
import { getFakeData } from '../../services/apiCall';
import { Container } from '@mui/material';

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const MainContent = () => {
	const [value, setValue] = useState(0);
	const [columns, setColumns] = useState([]);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		const { columns, rows } = getFakeData();
		setColumns(columns);
		setRows(rows);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="React HOCs Demo">
						<Tab label="Loading HOC Demo" {...a11yProps(0)} />
						<Tab label="Expand Button HOC Demo" {...a11yProps(1)} />
						<Tab label="Virtualized Table HOC Demo" {...a11yProps(2)} />
						<Tab label="Combined Usage Demo" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<LoadingDemo />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ExpandButtonDemo />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<VirtualizedTableDemo columns={columns} rows={rows} />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<CombinedDemo />
				</TabPanel>
			</Box>
		</Container>
	);
};

export default MainContent;
