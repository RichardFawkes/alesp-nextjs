import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/core/styles';

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
    backgroundColor: '#6d6c96',
    border: '0.5px #CCCCCC solid',
    color: '#fff',
    height: '16px',
    fontWeight: 'bold',
    fontSize: '13px',
    textAlign: 'center',
  },
});

const TableList = ({ idOrgaoProps } = 0) => {
  const classes = useStyles();

  const [detalhesCargo, setDetalhesCargo] = useState([]);

  useEffect(() => {
    if (idOrgaoProps) {
      axios
        .get(
          `http://localhost:8084/api/v1/p1tl1/detalhar-cargo-vaga?idWrkRegistro=0&idCargo=&idOrgao=${idOrgaoProps}`
        )
        .then((res) => {
          setDetalhesCargo(res.data);
        });
    }
  }, [idOrgaoProps]);
  return (
    <div>
      {detalhesCargo.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={classes.title}>
              <TableRow>
                {detalhesCargo.length > 0 &&
                  Object.keys(detalhesCargo[0]).map((colName, index) => (
                    <TableCell key={index}>{colName}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {detalhesCargo.map((cargo, index) => (
                <TableRow key={index}>
                  {Object.values(cargo).map((colValue, index) => (
                    <TableCell key={index}>{colValue}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TableList;
