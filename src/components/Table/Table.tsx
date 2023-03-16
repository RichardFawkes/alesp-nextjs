import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  title: {},
})

const TableList = ({ idOrgaoProps } = 0) => {
  const classes = useStyles()

  const [detalhesCargo, setDetalhesCargo] = useState([])

  useEffect(() => {
    if (idOrgaoProps) {
      axios
        .get(
          `http://localhost:8084/api/v1/p1tl1/detalhar-cargo-vaga?idWrkRegistro=0&idCargo=&idOrgao=${idOrgaoProps}`,
        )
        .then((res) => {
          setDetalhesCargo(res.data)
        })
    }
  }, [idOrgaoProps])

  return (
    <div>
      {detalhesCargo.length > 0 && (
        <TableContainer>
          <Table
            style={{ backgroundColor: '#9796b4' }}
            sx={{ minWidth: 300 }}
            aria-label="customized table"
          >
            <TableHead
              style={{
                textTransform: 'uppercase',
                backgroundColor: '#6d6c96',
                fontVariant: '#fff',
                height: '16px',
                fontWeight: 'bold',
                fontSize: '13px',
                textAlign: 'center',
                border: '0.5px #e5e6e7 solid',
              }}
            >
              <TableRow>
                <TableCell>CARGO CHEIO</TableCell>
                <TableCell>PREVISTO</TableCell>
                <TableCell>RT</TableCell>
                <TableCell>OCUPADO</TableCell>
                <TableCell>DISPONIVEL</TableCell>
                <TableCell>CARGO DIVIDIDO</TableCell>
                {/* <TableCell>PREVISTO</TableCell>
                <TableCell>PREVISTO</TableCell>
                <TableCell>RT</TableCell>
                <TableCell>OCUPADO</TableCell>
                <TableCell>DISPONIVEL</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {detalhesCargo.map((cargo, index) => (
                <TableRow key={index}>
                  <TableCell>{cargo.nomeCargoCheio}</TableCell>
                  <TableCell>{cargo.totalPrevistoCheio}</TableCell>
                  <TableCell>{cargo.dataFinal}</TableCell>
                  <TableCell>{cargo.numVagas}</TableCell>
                  <TableCell>{cargo.totalOcupadoCheio}</TableCell>
                  <TableCell>{cargo.nomeCargoDividido}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default TableList
