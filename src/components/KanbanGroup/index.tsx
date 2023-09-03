import { Box } from '@mui/material';
import { KanbanButton } from '../KanbanButton';
import { useState } from 'react';
import React from 'react';
export const KanbanGroup = ({
	handleClientsData,
}: {
	handleClientsData: Function;
}) => {
	const [activeButton, setActiveButton] = useState('All');

	const handleButtonClick = (label: string) => {
		setActiveButton(label);
		console.log(label.toLocaleLowerCase());
		handleClientsData(label.toLocaleLowerCase());
	};

	return (
		<Box sx={{ borderBottom: '1px solid #333A481A' }}>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color='black'
				txt='All'
				sx={{ margin: '0 18px 0 0' }}
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color='#6E8BEE'
				txt='Discovery'
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color='#3CBB6F'
				txt='Proposal'
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color='#C379DD'
				txt='Negotiation'
			/>
			<KanbanButton
				activeButton={activeButton}
				handleButtonClick={handleButtonClick}
				color='#D75100'
				txt='Won'
			/>
			<KanbanButton
				activeButton={activeButton}
				handleButtonClick={handleButtonClick}
				color='#D76A6A'
				txt='Lost'
			/>
		</Box>
	);
};
