import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import {
	DashBoardTable,
	KanbanGroup,
	TableFilterGroup,
	SearchBar,
	PaginationGroup,
} from '../../components';
import { ClientsData } from '../../mockup';
import { theme } from '../../theme';
const styles = {
	container: {
		padding: '1rem 2rem',
		margin: '0 auto',
		[theme.breakpoints.down('md')]: {
			padding: '1rem',
		},
	},
};
export const DashboardScreen = () => {
	const [clientsData, setClientsData] = useState(ClientsData);
	const handleClientsData = (str: string) => {
		if (str === 'all') {
			return setClientsData(ClientsData);
		}
		let filteredData = ClientsData.filter((row: any) => {
			return row.stage === str;
		});
		return setClientsData(filteredData);
	};
	return (
		<Container
			maxWidth={false}
			sx={styles.container}>
			<Box>
				<KanbanGroup handleClientsData={handleClientsData} />
				<SearchBar />
				<TableFilterGroup />
				<DashBoardTable DashboardDataProp={clientsData} />
			</Box>
			<PaginationGroup />
		</Container>
	);
};
