import TableCell from '@mui/material/TableCell';
import React from 'react';
import { ReactNode } from 'react';
interface CustomTableCellInterface {
	txt?: string | number | string[];
	sx?: Object;
	children?: ReactNode;
}

const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const CustomTableCell = ({
	txt,
	sx,
	children,
}: CustomTableCellInterface) => {
	return (
		<TableCell
			sx={{
				textAlign: 'center',
				height: '2.25rem',
				fontSize: '.875rem',
				fontWeight: 400,
				lineHeight: '1.25rem',
				color: '#666F7C',
				padding: '0rem 0.625rem',
				borderRight: '1px solid #666f7c33',
				borderBottom: '1px solid #666f7c33',
				whiteSpace: 'nowrap',
				...sx,
			}}>
			{children ? children : null}
			{typeof txt == 'string' ? capitalizeFirstLetter(txt) : txt}
		</TableCell>
	);
};
