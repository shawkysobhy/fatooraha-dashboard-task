import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { Stroke } from '../../assets';
interface TableFilterToolInterface {
	txt: string;
	children: ReactNode;
}
export const TableFilterTool = ({
	txt,
	children,
}: TableFilterToolInterface) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '0.25rem',
				cursor: 'pointer',
			}}>
			{children}
			<Typography
				sx={{
					fontSize: ' .8rem',
					fontWeight: '500',
					lineHeight: '0.875rem',
					color: '#666F7C',
				}}>
				{txt}
			</Typography>
			<Stroke />
		</Box>
	);
};
