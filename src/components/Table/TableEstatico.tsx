import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';

const TableList = ({ idOrgaoProps } = 0) => {
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
            <TableHead>
              <TableRow>
                <TableCell>Nome do Orgão</TableCell>
                <TableCell>Data de Início</TableCell>
                <TableCell>Data Final</TableCell>
                <TableCell>Número de Vagas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detalhesCargo.map((cargo, index) => (
                <TableRow key={index}>
                  <TableCell>{cargo.nomeCargoCheio}</TableCell>
                  <TableCell>{cargo.dataInicio}</TableCell>
                  <TableCell>{cargo.dataFinal}</TableCell>
                  <TableCell>{cargo.numVagas}</TableCell>
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
