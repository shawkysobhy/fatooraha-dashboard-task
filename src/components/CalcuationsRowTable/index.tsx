import { Box, TableCell, TableRow } from '@mui/material';
import React from 'react';

import { useFormatNumber } from '../../hooks/useFormatNumber';
const styles = {
	tableCellStyle: {
		textAlign: 'center',
		height: '2.25rem',
		fontSize: '.875rem',
		fontWeight: 400,
		lineHeight: '1.25rem',
		color: '#666F7C',
		padding: '0rem 0.625rem',
		borderIline: '1px solid #666f7c33',
		whiteSpace: 'nowrap',
	},
};

export const CalcuationsRowTable = ({
	DashboardDataProp,
}: {
	DashboardDataProp: any;
}) => {
	const occuranceHandler = (properity: string, value: string) => {
		const occuranceCount = DashboardDataProp.reduce(
			(accumlator: number, current: any) => {
				if (current[properity] === value) {
					return accumlator + 1;
				}
				return accumlator;
			},
			0
		);

		return occuranceCount;
	};
	const valuesSum = DashboardDataProp.reduce(
		(accumulator: number, currentValue: any) => {
			return accumulator + currentValue.value;
		},
		0
	);
	const clientBudget = DashboardDataProp.reduce(
		(accumulator: number, currentValue: any) => {
			return accumulator + currentValue.clientBudget;
		},
		0
	);
	const valueSumFormatted = useFormatNumber(valuesSum);
	const clientBudgetFormatted = useFormatNumber(clientBudget);
	const rowNums = DashboardDataProp.length;
	const highOccurance = occuranceHandler('priority', 'high');
	const medOccurance = occuranceHandler('priority', 'medium');
	const lowOccurance = occuranceHandler('priority', 'low');
  const discoveryOccurance = occuranceHandler('stage', 'discovery');
  const proposalOccurance = occuranceHandler('stage', 'proposal');
  const wonOccurance = occuranceHandler('stage', 'won');
  const negotiationOccurance = occuranceHandler('stage', 'negotiation');
  const lostOccurance = occuranceHandler('stage', 'lost');
	return (
		<TableRow>
			<TableCell/>
			<TableCell sx={styles.tableCellStyle}></TableCell>
			<TableCell
				sx={{
					...styles.tableCellStyle,
					padding: '0',
					m: '0',
					maxHeight: '1.4rem',
				}}>
				<Box
					sx={{
						display: 'flex',
						height: '100%',
            maxWidth:'100%',
						padding: '5px 0',
						backgroundColor: '#e9d0c0',
						maxHeight: '1.375rem',
					}}>
					<Box
						sx={{
							bgcolor: '#6E8BEE',
							minWidth: `${(discoveryOccurance / rowNums) * 100}px`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#3CBB6F',
							minWidth: `${(proposalOccurance / rowNums) * 100}px`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#D75100CC',
							minWidth: `${(wonOccurance / rowNums) * 100}px`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#D75100CC',
							minWidth: `${(wonOccurance / rowNums) * 100}px`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#C379DD',
							minWidth: `${(negotiationOccurance / rowNums) * 100}px`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#D76A6A',
							minWidth: `${(lostOccurance / rowNums) * 100}px`,
						}}
					/>
				</Box>
			</TableCell>
			<TableCell sx={styles.tableCellStyle}></TableCell>
			<TableCell sx={{ ...styles.tableCellStyle, bgcolor: '#f5dbca' }}>
				{valueSumFormatted}
			</TableCell>
			<TableCell ></TableCell>
			<TableCell sx={styles.tableCellStyle}></TableCell>
			<TableCell
				sx={{
					...styles.tableCellStyle,
					padding: '0',
					m: '0',
					maxHeight: '1.4rem',
				}}>
				<Box
					sx={{
						display: 'flex',
						height: '100%',
						padding: '5px',
						backgroundColor: '#e9d0c0',
						maxHeight: '1.375rem',
					}}>
					<Box
						sx={{
							bgcolor: '#D75100',
							minWidth: `${(highOccurance / rowNums) * 100}%`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#efbfa2',
							minWidth: `${(lowOccurance / rowNums) * 100}%`,
						}}
					/>
					<Box
						sx={{
							bgcolor: '#eaa77f',
							minWidth: `${(medOccurance / rowNums) * 100}%`,
						}}
					/>
				</Box>
			</TableCell>
			<TableCell />
			<TableCell />
			<TableCell />
			<TableCell />
			<TableCell />
			<TableCell />
			<TableCell sx={styles.tableCellStyle}></TableCell>
			<TableCell sx={{ ...styles.tableCellStyle, bgcolor: '#f5dbca' }}>
				{clientBudgetFormatted}
			</TableCell>
			<TableCell />
			<TableCell sx={styles.tableCellStyle}></TableCell>
		</TableRow>
	);
};
