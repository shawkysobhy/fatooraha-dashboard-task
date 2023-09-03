import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

export const PaginationButton = ({
	num,
	active,
	children,
}: {
	num?: string;
	active?: boolean;
	children?: ReactNode;
}) => {
	return (
		<Box
			sx={{
				cursor: 'pointer',
				display: 'flex',
				width: '1.5rem',
				height: '1.5rem',
				padding: ' 0.30469rem 0.2344rem 0.32031rem 0.2344rem',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '0.375rem',
				border: '1px solid #BDBDBD',
				color: active ? 'white' : '#BDBDBD',
				bgcolor: active ? '#d75218' : 'white',
			}}>
			{num || children}
		</Box>
	);
};
