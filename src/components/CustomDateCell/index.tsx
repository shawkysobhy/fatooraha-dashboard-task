import TableCell from '@mui/material/TableCell';
import React from 'react';
interface CustomTableCellInterface {
	txt: string;
}

function formatDateHandler(txt: string): string {
	const date = new Date(txt);
	const formattedDate = date.toLocaleDateString();
	return formattedDate;
}

export const CustomDateCell = ({ txt }: CustomTableCellInterface) => {
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
				borderIline: '1px solid #666f7c33',
				whiteSpace: 'nowrap',
			}}>
			{formatDateHandler(txt)}
		</TableCell>
	);
};
