import React from 'react';
import { Box, Typography } from '@mui/material';
import { TableFilterTool } from '../TableFilterTool';
import {
	SwitchVerticalIcon,
	UserIcon,
	TagsIcon,
	BuildingIcon,
	CalendarIcon,
	Stroke,
} from '../../assets';
import { theme } from '../../theme';
const styles = {
	container: {
		display: 'flex',
		margin: '1.19rem auto',
		height: '1.5rem',
		gap: '2rem',
		overflowX: 'auto',
		'&::-webkit-scrollbar': {
			maxHeight: '.5rem',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#df7333',
		},
		[theme.breakpoints.down('md')]: {
			padding: '2rem 0 1rem 0',
		},
	},
};
export const TableFilterGroup = () => {
	return (
		<Box sx={styles.container}>
			<TableFilterTool txt='This Month'>
				<CalendarIcon />
			</TableFilterTool>
			<TableFilterTool txt='All Companies'>
				<BuildingIcon />
			</TableFilterTool>
			<TableFilterTool txt='All Assignees'>
				<UserIcon />
			</TableFilterTool>
			<TableFilterTool txt='Tags'>
				<TagsIcon />
			</TableFilterTool>
			<TableFilterTool txt='Sort'>
				<SwitchVerticalIcon />
			</TableFilterTool>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					gap: '0.25rem',
					cursor: 'pointer',
				}}>
				<Typography
					sx={{
						fontSize: ' .8rem',
						fontWeight: '500',
						lineHeight: '0.875rem',
						color: '#666F7C',
						textDecoration: 'underline 1px #666F7C',
					}}>
					{'Showing 10 Items'}
				</Typography>
				<Stroke />
				<Typography
					sx={{
						fontSize: ' .8rem',
						fontWeight: '500',
						lineHeight: '0.875rem',
						color: '#666F7C',
					}}>
					<Typography
						sx={{
							fontWeight: '700',
							color: '#d75218',
							fontSize: ' .8rem',
							display: 'inline',
						}}>
						10
					</Typography>
					<span> / 250</span>
				</Typography>
			</Box>
		</Box>
	);
};
