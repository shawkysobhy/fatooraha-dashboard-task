import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchRefraction } from '../../assets';
import React from 'react';

export const SearchBar = () => {
	return (
		<TextField
			sx={{
				margin: '0',
				width: '232px',
			}}
			id='standard-search-basic'
			label='Search'
			variant='standard'
			InputProps={{
				style: {
					fontSize: '12px',
					fontWeight: 400,
					lineHeight: '1.5',
					padding: '5px 8px',
				},
				endAdornment: (
					<InputAdornment position='end'>
						<SearchRefraction />
					</InputAdornment>
				),
			}}
		/>
	);
};
