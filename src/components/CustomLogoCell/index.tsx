import React from 'react';
import { CustomTableCell } from '../../components';
import { Box } from '@mui/material';
interface CustomLogoCellInterface {
	logos: string[];
	sxProps?: {};
}
export const CustomLogoCell = ({ logos, sxProps }: CustomLogoCellInterface) => {
	console.log(logos);
	return (
		<CustomTableCell
			sx={{
				textAlign: 'center',
				verticalAlign: 'middle',
				height: '2.25rem',
			}}>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				{logos &&
					logos.map((logo) => {
						return (
							<img
								key={Math.random() * Math.random()}
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
						);
					})}
			</Box>
		</CustomTableCell>
	);
};
