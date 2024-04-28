import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ComplaintsStore from '@/store/ComplaintsStore';
import { IComplaint } from '@/types/interfaces';

interface ComplaintsTableProps {
  complaintType: 'audio' | 'connection';
}

const ComplaintsTable = observer(({ complaintType }: ComplaintsTableProps) => {
  // useEffect(() => {
  //   ComplaintsStore.fetchComplaints();
  // }, []);

  const filteredComplaints = ComplaintsStore.complaints.filter((complaint: IComplaint) => complaint.type === complaintType);

  return (
    <Paper style={{ height: 400, width: 600, borderRadius: '25px' }}>
      <TableContainer style={{ maxHeight: 400, padding: '0 16px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>
                Сообщение
              </TableCell>
              <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>
                ID видео
              </TableCell>
              <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComplaints.map((complaint: IComplaint, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Onest',
                    fontWeight: 400,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {complaint.message.length > 25 ? `${complaint.message.substring(0, 15)}...` : complaint.message}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Onest',
                    fontWeight: 400,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {complaint.videoID}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Onest',
                    fontWeight: 400,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {complaint.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
});

export default ComplaintsTable;
