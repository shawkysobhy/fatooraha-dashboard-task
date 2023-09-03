import { Button } from '@mui/material';
import React from 'react';
interface KanbanButtonInterface {
	color: string;
	txt: string;
	handleButtonClick: Function;
	activeButton: string;
	sx?: Object;
}

export const KanbanButton = ({
	color,
	txt,
	activeButton,
	handleButtonClick,
	sx,
}: KanbanButtonInterface) => {
	return (
		<Button
			variant='text'
			disableRipple
			sx={{
				backgroundColor: 'transparent',
				border: 'none',
				boxShadow: 'none',
				minWidth: '73px',
				padding: '0 0 0 0',
				color: color,
				borderRadius: '0',

				borderBottom: '2px solid transparent',
				borderBottomColor: activeButton === txt ? 'black' : 'transparent',
				...sx,
				'&:hover': {
					backgroundColor: 'transparent', // Remove background color change on hover
					boxShadow: 'none',
				},
			}}
			disableFocusRipple
			onClick={() => {
				handleButtonClick(txt);
			}}>
			{txt}
		</Button>
	);
};
