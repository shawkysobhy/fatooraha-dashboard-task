import { Button } from '@mui/material';
import React from 'react';
interface KanbanButtonInterface {
	color: string;
	txt: string;
	handleButtonClick: Function;
	activeButton: string;
	sx?: Object;
}
const styles = {
	button: {
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		minWidth: '73px',
		padding: '0',
		borderRadius: '0',
		borderBottom: '2px solid transparent',
		'&:hover': {
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
	},
};
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
			disableFocusRipple
			sx={{
				...styles.button,
				color: color,
				borderBottomColor: activeButton === txt ? 'black' : 'transparent',
				...sx,
			}}
			onClick={() => {
				handleButtonClick(txt);
			}}>
			{txt}
		</Button>
	);
};
