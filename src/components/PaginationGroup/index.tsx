import { Box } from '@mui/material';
import React from 'react';
import { PaginationButton } from '../../components';
import { PaginationRightIcon, PaginationLeftIcon } from '../../assets';
export const PaginationGroup = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '90%',
				justifyContent: 'center',
				padding: '10px 0px',
			}}>
			<Box sx={{ display: 'flex', gap: '1.25rem', padding: ' 0.625rem' }}>
				<PaginationButton>
					<PaginationLeftIcon />
				</PaginationButton>
				<PaginationButton num={'1'} active={true} />
				<PaginationButton num={'2'} />
				<PaginationButton num={'3'} />
				<PaginationButton num={'4'} />
				<PaginationButton num={'5'} />
				<PaginationButton>
					<PaginationRightIcon />
				</PaginationButton>
			</Box>
		</Box>
	);
};
