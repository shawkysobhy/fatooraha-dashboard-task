import React from 'react';
import { CustomTableCell } from '..';
import { Box } from '@mui/material';
import UserSquare from '../../assets/userSquare.png';
interface CustomAssigneInterface {
	logo: string;
	sxProps?: {};
}
export const CustomAssigneCell = ({ logo, sxProps }: CustomAssigneInterface) => {
	return (
		<CustomTableCell
			sx={{
				textAlign: 'center',
				verticalAlign: 'middle',
				height: '2.25rem',
			}}>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				{logo && (
					<img
						src={logo}
						alt={`${logo}-logo`}
						style={{
							maxWidth: '1.625rem',
							height: '1.625rem',
							margin: '0 5px',
							display: 'block',
							...sxProps,
						}}
					/>
				)}
				{!logo && (
					<img
						src={UserSquare}
						alt={'user square icon'}
						style={{
							maxWidth: '1.625rem',
							height: '1.625rem',
							margin: '0 5px',
							display: 'block',
						}}
					/>
				)}
			</Box>
		</CustomTableCell>
	);
};
