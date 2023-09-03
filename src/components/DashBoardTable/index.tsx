import React from 'react';
import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Checkbox,
} from '@mui/material';
import {
	CustomChartCell,
	CustomValueCell,
	NameTableCell,
	CustomDateCell,
	CustomTableCell,
	CustomLogoCell,
	CustomListCell,
	CalcuationsRowTable,
	CustomAssigneCell,
} from '../../components';
import {
	STAGECOLORS,
	INCOMINGCOLORS,
	PRIORITYCOLORS,
} from '../../values/colors';
import PhoneIcon from '../../assets/phone.png';
import UserCircle from '../../assets/userCircle.png';
const styles = {
	checkboxCellStyle: {
		m: '0',
		borderIline: '1px solid #666f7c33',
		maxWidth: '2rem',
		padding: '0px 10px',
	},
	Checkbox: { p: '0', m: '0' },
	headCellsStyle: {
		fontWeight: 700,
		height: '2.25rem',
	},
	sharedListStyle: {
		display: 'flex',
		padding: '0rem 0.25rem',
		color: '#666f7c',
		gap: '0.625rem',
		fontWeight: 400,
		margin: 'auto 7px',
		borderRadius: '0.25rem',
		maxWidth: '8.4rem',
		justifyContent: 'center',
		alignItems: 'center',
	},
	customListCellContacts: {
		bgcolor: '#dfe1e3',
	},
	customListClients: {
		bgcolor: '#dfe1e3',
	},
	customListFiles: {
		bgcolor: '#f5dbca',
		fontSize: '.87rem',
	},
};
export const DashBoardTable = ({ DashboardDataProp }: any) => {
	return (
		<TableContainer
			component={Paper}
			sx={{
				'&::-webkit-scrollbar': {
					maxHeight: '.5rem',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#d9aa8d',
				},
			}}>
			<Table aria-label='simple table' sx={{ borderBottom: 'none' }}>
				<TableHead sx={{ m: '0', p: '0', height: '2rem' }}>
					<TableRow>
						<TableCell sx={styles.checkboxCellStyle}>
							<Checkbox sx={styles.Checkbox} />
						</TableCell>
						<CustomTableCell txt='Name' sx={{ minWidth: '12.18rem' }} />
						<CustomTableCell txt='Stage' sx={{ minWidth: '6.5rem' }} />
						<CustomTableCell txt='Assignee' sx={{ minWidth: '4.32rem' }} />
						<CustomTableCell txt='Value' sx={{ minWidth: '6.5rem' }} />
						<CustomTableCell txt='Contacts' sx={{ minWidth: '18.75rem' }} />
						<CustomTableCell txt='Client' sx={{ minWidth: '10.32rem' }} />
						<CustomTableCell txt='Priority' sx={{ minWidth: '6.43rem' }} />
						<CustomTableCell txt='Last Activity' sx={{ minWidth: '10rem' }} />
						<CustomTableCell txt='Due Date' sx={{ minWidth: '10rem' }} />
						<CustomTableCell txt='Note' sx={{ minWidth: '25rem' }} />
						<CustomTableCell
							txt='Opportunity Space'
							sx={{ minWidth: '10rem' }}
						/>
						<CustomTableCell txt='Company' sx={{ minWidth: '5rem' }} />
						<CustomTableCell txt='Client Date' sx={{ minWidth: '10rem' }} />
						<CustomTableCell
							txt='Incoming/Outgoing'
							sx={{ minWidth: '10rem' }}
						/>
						<CustomTableCell txt='Client Budget' sx={{ minWidth: '8.6rem' }} />
						<CustomTableCell
							txt='Proposal Submission Date'
							sx={{ minWidth: '12.2rem' }}
						/>
						<CustomTableCell txt='Files' sx={{ minWidth: '10.125rem' }} />
					</TableRow>
				</TableHead>
				<TableBody>
					{DashboardDataProp.map((row: any) => (
						<TableRow key={row.id}>
							<TableCell sx={styles.checkboxCellStyle}>
								<Checkbox sx={styles.Checkbox} />
							</TableCell>
							<NameTableCell txt={row.name} />
							<CustomChartCell txt={row.stage} pallette={STAGECOLORS} />
							<CustomAssigneCell logo={row.assignee} />
							<CustomValueCell txt={row.value} />
							<CustomListCell
								datalist={row.contacts}
								icon={PhoneIcon}
								justifyParent='start'
								sxProps={{
									...styles.customListCellContacts,
									...styles.sharedListStyle,
								}}
							/>
							<CustomListCell
								datalist={[row.client]}
								icon={UserCircle}
								sxProps={{
									...styles.customListClients,
									...styles.sharedListStyle,
								}}
							/>
							<CustomChartCell txt={row.priority} pallette={PRIORITYCOLORS} />
							<CustomDateCell txt={row.lastActivity} />
							<CustomDateCell txt={row.dueDate} />
							<CustomTableCell txt={row.note} sx={{ fontWeight: '400' }} />
							<CustomLogoCell logos={row.opportunitySpace} />
							<CustomLogoCell logos={[row.company]} />
							<CustomDateCell txt={row.creationDate} />
							<CustomChartCell txt={row.incoming} pallette={INCOMINGCOLORS} />
							<CustomValueCell txt={row.clientBudget} />
							<CustomDateCell txt={row.proposalSubmissionDate} />
							<CustomListCell
								datalist={row.files}
								justifyParent='center'
								sxProps={{
									...styles.customListFiles,
									...styles.sharedListStyle,
								}}
							/>
						</TableRow>
					))}
					<CalcuationsRowTable DashboardDataProp={DashboardDataProp} />
				</TableBody>
			</Table>
		</TableContainer>
	);
};
