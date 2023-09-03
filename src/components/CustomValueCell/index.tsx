import TableCell from '@mui/material/TableCell';
import React from 'react';
import { useFormatNumber } from '../../hooks/useFormatNumber';
interface CustomTableCellInterface {
	txt: number;
	sx?: Object;
}
export const CustomValueCell = ({ txt, sx }: CustomTableCellInterface) => {
	const formattedNumber = useFormatNumber(txt);

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
				...sx,
			}}>
			{txt ? formattedNumber : ''}
		</TableCell>
	);
};
