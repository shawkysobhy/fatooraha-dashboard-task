import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { ClientsData } from '../../models';
import PhoneIcon from '../../assets/phone.png';
import UserCircle from '../../assets/userCircle.png';
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
const styles = {
	checkboxCellStyle: {
		m: '0',
		borderRight: '1px solid #666f7c33',
		borderBottom: '1px solid #666f7c33',
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
					width: 0,
				},
			}}>
			<Table aria-label='simple table' sx={{ borderBottom: 'none' }}>
				<TableHead sx={{ m: '0', p: '0', height: '2rem' }}>
					<TableRow>
						<TableCell sx={styles.checkboxCellStyle}>
							<Checkbox sx={styles.Checkbox} />
						</TableCell>
						<CustomTableCell
							txt='Name'
							sx={{ minWidth: '12.18rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Stage'
							sx={{ minWidth: '6.5rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Assignee'
							sx={{ minWidth: '4.32rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Value'
							sx={{ minWidth: '6.5rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Contacts'
							sx={{ minWidth: '18.75rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Client'
							sx={{ minWidth: '10.32rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Priority'
							sx={{ minWidth: '6.43rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Last Activity'
							sx={{ minWidth: '10rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Due Date'
							sx={{ minWidth: '10rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Note'
							sx={{ minWidth: '25rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Opportunity Space'
							sx={{ minWidth: '10rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Company'
							sx={{ minWidth: '5rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Client Date'
							sx={{ minWidth: '10rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Incoming/Outgoing'
							sx={{ minWidth: '10rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Client Budget'
							sx={{ minWidth: '8.6rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Proposal Submission Date'
							sx={{ minWidth: '12.2rem', ...styles.headCellsStyle }}
						/>
						<CustomTableCell
							txt='Files'
							sx={{ minWidth: '10.125rem', ...styles.headCellsStyle }}
						/>
					</TableRow>
				</TableHead>
				<TableBody>
					{DashboardDataProp.map((row: ClientsData) => (
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
							<CustomTableCell txt={row.note} />
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
