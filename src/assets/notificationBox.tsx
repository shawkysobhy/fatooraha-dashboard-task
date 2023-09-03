import { Box } from '@mui/material';
import React from 'react';

export const NotificationBox = ({
	notificationNums,
}: {
	notificationNums: number;
}) => {
	return (
		<Box sx={{ position: 'relative' }}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V13M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z'
					stroke={`${notificationNums > 0 ? '#D75100' : '#666F7C'}`}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<Box
				sx={{
					position: 'absolute',
					width: '0.4375rem',
					height: '0.5625rem',
					top: '22%',
					left: '33%',
					fontWeight: 700,
					color: '#d75218',
					fontSize: '.7rem',
					lineHeight: ' .8rem',
				}}>
				{notificationNums > 0 && notificationNums}
			</Box>
		</Box>
	);
};
