import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { Stroke } from '../../assets';
interface TableFilterToolInterface {
	txt: string;
	children: ReactNode;
}
const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.25rem',
		cursor: 'pointer',
	},
	buttonText: {
		fontSize: ' .8rem',
		fontWeight: '500',
		lineHeight: '0.875rem',
		color: '#666F7C',
	},
};
export const TableFilterTool = ({
	txt,
	children,
}: TableFilterToolInterface) => {
	return (
		<Box sx={styles.container}>
			{children}
			<Typography sx={styles.buttonText}>{txt}</Typography>
			<Stroke />
		</Box>
	);
};
