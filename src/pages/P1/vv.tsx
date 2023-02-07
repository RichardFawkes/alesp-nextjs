// @ts-nocheck
import { BtnPrimary, BtnSecondary } from '@/components/Button/Buttons';
import { Input } from '@material-ui/core';
import Iframe from 'react-iframe';

import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Card from '@mui/material/Card';
import Header from '@/components/Header/Header';
const TL1 = () => {
  const [accessToken, setAccessToken] = useState('');
  const [numberProntuario, setNumberProntuario] = useState('');
  const [idFolder, setIdFolder] = useState('');
  const [documents, setDocuments] = useState();

  useEffect(() => {
    const getToken = async () => {
      const clientId = 'be9a65e3-aee0-4165-90b3-9ce1a4ca0e26';
      const clientSecret = '2iDFEqgiCSTGs3Q4LWxkehTPuHT8KCT7s6vFV32jvmA=';
      const username = 'richard.ferreira@grmdoc.com.br';
      const password = '123456';

      const response = await fetch(
        `https://vvdemo.visualvault.com/oauth/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `client_id=${clientId}&client_secret=${clientSecret}&username=${username}&password=${password}&grant_type=password`,
        }
      );
      const json = await response.json();
      setAccessToken(json.access_token);
      console.log(json.access_token);
    };

    getToken();
  }, []);

  const getFolderByID = async (id) => {
    const responseIdFolder = await fetch(
      `https://vvdemo.visualvault.com/api/v1/PedroDemo/Main/folders/${id}/documents`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((responseIdFolder) => responseIdFolder.json())
      .then((dataFolder) => {
        setDocuments(dataFolder.data);
      });
  };

  const getFolderbyProntuario = async () => {
    if (!accessToken) {
      return;
    }

    const response = await fetch(
      `https://vvdemo.visualvault.com/api/v1/PedroDemo/Main/folders?folderPath=/SAME/Prontuarios/${numberProntuario}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        getFolderByID(data.data.id);
      });
  };

  const downloadFile = async (idDoc, nameDoc) => {
    if (!accessToken) {
      return;
    }

    const response = await fetch(
      `https://vvdemo.visualvault.com/api/v1/PedroDemo/Main/files/${idDoc}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${nameDoc}`;
    link.click();
  };

  async function getSrc() {
    const res = await fetch(
      'https://vvdemo.visualvault.com/app/PedroDemo/Main/DocumentLibrary',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1`,
        },
      }
    );
    const blob = await res.blob();
    const urlObject = URL.createObjectURL(blob);
    document.querySelector('iframe').setAttribute('src', urlObject);
  }
  getSrc();

  return (
    <>
      <Header
        titleHeader="Medicina Direta"
        subtitleHeader="PL1TL1"
        backgroundColor="#262454"
      />
      <Iframe width="100%" height="1000" display="block" position="relative" />
      <div>
        {!accessToken ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Input
              placeholder="Digite Numero Prontuario"
              onChange={(event) => setNumberProntuario(event.target.value)}
            />
            <Button variant="contained" onClick={getFolderbyProntuario}>
              Buscar Exames
            </Button>
          </div>
        )}

        {!documents ? (
          <></>
        ) : (
          <div>
            {documents.map((data, index) => (
              <Card key={index}>
                <label>
                  <ContentPasteIcon />
                  {data.name}
                </label>
                <Button
                  variant="contained"
                  onClick={() => downloadFile(data.id, data.name)}
                >
                  Baixar
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TL1;
