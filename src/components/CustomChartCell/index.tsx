import TableCell from '@mui/material/TableCell';
import React from 'react';
interface CustomTableCellInterface {
	txt?: string;
	sx?: Object;
	pallette?: {
		[key: string]: {
			bgcolor: string;
			color: string;
		};
	};
}
const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
export const CustomChartCell = ({
	txt,
	sx,
	pallette,
}: CustomTableCellInterface) => {
	return (
		<TableCell
			sx={{
				textAlign: 'center',
				height: '2.25rem',
				fontSize: '.875rem',
				fontWeight: 400,
				lineHeight: '1.25rem',
				color:
					txt && pallette
						? pallette[txt as keyof typeof pallette]['color']
						: 'white',
				padding: '0rem 0.625rem',
				borderRight: '1px solid #666f7c33',
				borderBottom: '1px solid #666f7c33',
				whiteSpace: 'nowrap',
				bgcolor:
					txt && pallette
						? pallette[txt as keyof typeof pallette]['bgcolor']
						: 'white',
				...sx,
			}}>
			{typeof txt == 'string' ? capitalizeFirstLetter(txt) : txt}
		</TableCell>
	);
};
