'use client'

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from 'next/navigation'; // Import the useRouter hook from 'next/navigation' (for client-side routing)
import {
  Tooltip, User, Input, Button, Pagination
} from "@nextui-org/react";
import { EditIcon } from "./comps/EditIcon";
import { DeleteIcon } from "./comps/DeleteIcon";
import { EyeIcon } from "./comps/EyeIcon";
import { PlusIcon } from "./comps/PlusIcon";
import { SearchIcon } from "./comps/SearchIcon";

type Bonsai = {
  id: string;
  nome: string;
  url: string;
  preco: string;
  categoria: string;
  visible: boolean;
};

const columns = [
  { uid: "image", name: "" },
  { uid: "nome", name: "Nome" },
  { uid: "preco", name: "Preço" },
  { uid: "categoria", name: "Categoria" },
  { uid: "actions", name: "Ações" }
];

const App = () => {
  const [bonsais, setBonsais] = useState<Bonsai[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  
  const [isClient, setIsClient] = useState(false); // Track whether the component is rendered on the client

  // Initialize router only on the client side
  const router = isClient ? useRouter() : null;

  useEffect(() => {
    // Set isClient to true after the first render to ensure client-side rendering
    setIsClient(true);
    
    fetch('/api/store/fetchbonsai/all')
      .then(response => response.json())
      .then(data => setBonsais(data));
  }, []);

  const filteredBonsais = useMemo(() => {
    return bonsais.filter(bonsai => 
      bonsai.nome.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [bonsais, searchValue]);

  const paginatedBonsais = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredBonsais.slice(start, end);
  }, [filteredBonsais, page, rowsPerPage]);

  const handleDetailsClick = (url: string) => {
    if (router) {
      router.push(`/produto/${url}`);
    }
  };

  const renderCell = (bonsai: Bonsai, columnKey: string) => {
    switch (columnKey) {
      case "image":
        return (
          <User
            name={bonsai.nome} // Provide the name prop to User component
            avatarProps={{ radius: "lg", src: `/images/bonsais/${bonsai.url}/cover/cover.jpg` }}
          />
        );
      case "nome":
        return bonsai.nome;
      case "preco":
        return `R$ ${bonsai.preco}`;
      case "categoria":
        return bonsai.categoria;
      case "actions":
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Ver Página na Loja">
              <span
                className="text-lg cursor-pointer"
                onClick={() => handleDetailsClick(bonsai.url)} // Trigger the redirection
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar bonsai">
              <span className="text-lg cursor-pointer">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Excluir bonsai">
              <span className="text-lg text-red-500 cursor-pointer">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return bonsai[columnKey];
    }
  };

  if (!isClient) return null; // Ensure component is not rendered on the server side

  return (
    <div className="p-4">
      <div className="flex justify-between gap-3 items-center">
        <Input
          isClearable
          placeholder="Pesquisar por nome..."
          startContent={<SearchIcon />}
          value={searchValue}
          onClear={() => setSearchValue('')}
          onValueChange={setSearchValue}
        />
        <Button color="primary" endContent={<PlusIcon width={5} height={5} />}>Adicionar Novo Bonsai</Button>
      </div>
      <table className="min-w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.uid} className="border-b border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedBonsais.map(bonsai => (
            <tr key={bonsai.id} className="border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200 ease-in-out">
              {columns.map(column => (
                <td key={column.uid} className="px-4 py-2 text-sm text-gray-700">
                  {renderCell(bonsai, column.uid)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        total={Math.ceil(filteredBonsais.length / rowsPerPage)}
        onChange={setPage}
      />
    </div>
  );
};

export default App;
