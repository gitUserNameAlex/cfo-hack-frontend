import React, { FC, useEffect, useState } from 'react';
import SpamStore from '@/store/SpamStore';
import { observer } from 'mobx-react-lite';
import { ISpam } from '@/types/interfaces';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, MenuItem, Select } from '@mui/material';
import styles from './SpamTable.module.scss';

const SpamTable: FC = observer(() => {
  const [selectedType, setSelectedType] = useState('all');
  // useEffect(() => {
  //   SpamStore.fetchSpam();
  // }, []);

  return (
    <div className={styles.table__container} style={{ maxWidth: 850, width: '100%' }}>
      <div className={styles.table__container__header}>
        <div style={{ fontSize: 22, fontWeight: 500 }}>Спам и нецензурная лексика</div>
        <div style={{ marginBottom: 10 }}>
          <Select
            size="medium"
            variant="outlined"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            style={{ minWidth: 150 }}
            color="primary"
            placeholder="Choose one…"
          >
            <MenuItem value="all">all</MenuItem>
            <MenuItem value="spam">spam</MenuItem>
            <MenuItem value="censorship">censorship</MenuItem>
          </Select>
        </div>
      </div>

      <Paper style={{ borderRadius: '25px' }}>
        <TableContainer style={{ maxHeight: 400, padding: '0 26px' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>
                  Сообщение
                </TableCell>
                <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>Тип</TableCell>
                <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>
                  Дата
                </TableCell>
                <TableCell style={{ color: '#718EBF', textAlign: 'center', fontFamily: 'Onest', fontWeight: 500 }}>
                  ID урока
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SpamStore.spam
                .filter((spam: ISpam) => selectedType === 'all' || spam.type === selectedType)
                .map((spam: ISpam, index) => (
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
                      {spam.message.length > 20 ? `${spam.message.substring(0, 15)}...` : spam.message}
                    </TableCell>
                    <TableCell
                      className={spam.type === 'spam' ? styles.spam__type : styles.censorship__type}
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Onest',
                        fontWeight: 400,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {spam.type}
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
                      {spam.date}
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
                      {spam.videoID}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
});

export default SpamTable;
