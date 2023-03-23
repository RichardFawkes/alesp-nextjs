import React, { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Header from "@/components/Header/Header";
import TableList from "@/components/Table/Table";
import { Card, ListItemButton } from "@mui/material/";

const Autocomplete = () => {
  const [orgaos, setOrgaos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8084/api/v1/p1tl1/pesquisar-nomes-orgaos")
      .then((res) => {
        setOrgaos(res.data);
      });
  }, [orgaos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSelectedItemName(event.target.value);
    setSelectedItemId(event.target.defaultValue);
  };

  const handleItemClick = (item: any) => {
    setSelectedItemName(item.label);
    setSelectedItemId(item.value);
    setInputValue("");
  };
  return (
    <>
      <Header
        titleHeader="CONSULTA DA OCUPAÇÃO DE VAGAS NA UA
        "
        backgroundColor="#262454"
      />

      <InputLabel style={{ marginTop: 15 }} htmlFor="autocomplete">
        Unidade Administrativa:
      </InputLabel>
      <Input
        id="autocomplete"
        defaultValue={selectedItemId}
        value={selectedItemName}
        onChange={handleInputChange}
        fullWidth
      />
      {inputValue !== "" && (
        <div>
          <Card>
            {orgaos
              .filter((item) => item.label.includes(inputValue))
              .map((item, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => handleItemClick(item)}
                >
                  {item.value} - {item.label}
                </ListItemButton>
              ))}
          </Card>
        </div>
      )}

      <TableList idOrgaoProps={selectedItemId} />
    </>
  );
};

export default Autocomplete;
