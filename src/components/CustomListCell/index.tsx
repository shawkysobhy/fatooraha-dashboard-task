import React from 'react';
import { CustomTableCell } from '../../components';

import { Box } from '@mui/material';
interface CustomListCellInterface {
	datalist: string[];
	sxProps?: {};
	justifyParent?: string;
	icon?: string;
}
function capitalizeWords(inputString: string): string {
	return inputString
		.split(' ')
		.map((word) => capitalizeFirstLetter(word))
		.join(' ');
}
function capitalizeFirstLetter(word: string): string {
	if (word.length === 0) {
		return word; 
	}
	const firstLetter = word[0].toUpperCase();
	const restOfString = word.slice(1);
	return firstLetter + restOfString;
}

export const CustomListCell = ({
	datalist,
	sxProps,
	icon,
	justifyParent,
}: CustomListCellInterface) => {
	return (
		<CustomTableCell
			sx={{
				textAlign: 'center',
				verticalAlign: 'middle',
				height: '2.25rem',
			}}>
			<Box sx={{ display: 'flex', justifyContent: justifyParent }}>
				{datalist.map((data) => {
					return (
						<Box
							sx={{ ...sxProps }}
							key={Math.random() * Math.random()}>
							{icon ? (
								<img
									src={icon}
									alt={`${icon}`}
									style={{
										width: '1rem',
										height: '1rem',
										padding: 0,
										margin: 0,
										border: 0,
									}}
								/>
							) : null}
							<span>{capitalizeWords(data)}</span>
						</Box>
					);
				})}
			</Box>
		</CustomTableCell>
	);
};
