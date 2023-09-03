import { Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import React from 'react';
import { NotificationBox } from '../../assets/notificationBox';
interface Name {
	userName: string;
	notification: number;
}

interface CustomTableCellInterface {
	txt: Name;
	sx?: Object;
}

const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const NameTableCell = ({ txt, sx }: CustomTableCellInterface) => {
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
				textDecorationLine: 'underline',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				...sx,
			}}>
			<Typography sx={{}}>
				{typeof txt?.userName == 'string'
					? capitalizeFirstLetter(txt.userName)
					: txt.userName}
			</Typography>
			<NotificationBox notificationNums={txt.notification} />
		</TableCell>
	);
};
