import { Box, Container } from '@mui/material';
import {
	DashBoardTable,
	KanbanGroup,
	TableFilterGroup,
} from '../../components';
import { SearchBar, PaginationGroup } from '../../components';
import { ClientsData } from '../../mockup';
import React, { useState } from 'react';
import { theme } from '../../theme';
export const DashboardScreen = () => {
	const [clientsData, setClientsData] = useState(ClientsData);
	const handleClientsData = (str: string) => {
		if (str === 'all') {
			return setClientsData((prev) => ClientsData);
		}
		let filteredData = ClientsData.filter((row: any) => {
			return row.stage === str;
		});
		return setClientsData((prev) => filteredData);
	};
	return (
		<Container
			maxWidth={false}
			sx={{
				padding: '1rem 2rem',
				margin: '0 auto',
				[theme.breakpoints.down('md')]: {
					padding: '1rem',
				},
			}}>
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
