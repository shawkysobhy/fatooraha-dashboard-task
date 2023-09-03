import { Box } from '@mui/material';
import { KanbanButton } from '../KanbanButton';
import { useState } from 'react';
import { STAGECOLORS } from '../../values/colors';
import React from 'react';
import { theme } from '../../theme';
interface KanbanGroupInterface {
	handleClientsData: Function;
}
const styles = {
	container: {
		borderBottom: '1px solid #333A481A',
		display: 'flex',
		gap: '1rem 2rem',
		flexWrap: 'wrap',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
};
export const KanbanGroup = ({ handleClientsData }: KanbanGroupInterface) => {
	const [activeButton, setActiveButton] = useState('All');
	const handleButtonClick = (label: string) => {
		setActiveButton(label);
		handleClientsData(label.toLocaleLowerCase());
	};
	return (
		<Box sx={styles.container}>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color='black'
				txt='All'
				sx={{ margin: '0' }}
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color={STAGECOLORS.discovery.bgcolor}
				txt='Discovery'
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color={STAGECOLORS.proposal.bgcolor}
				txt='Proposal'
			/>
			<KanbanButton
				handleButtonClick={handleButtonClick}
				activeButton={activeButton}
				color={STAGECOLORS.negotiation.bgcolor}
				txt='Negotiation'
			/>
			<KanbanButton
				activeButton={activeButton}
				handleButtonClick={handleButtonClick}
				color={STAGECOLORS.won.bgcolor}
				txt='Won'
			/>
			<KanbanButton
				activeButton={activeButton}
				handleButtonClick={handleButtonClick}
				color={STAGECOLORS.lost.bgcolor}
				txt='Lost'
			/>
		</Box>
	);
};
