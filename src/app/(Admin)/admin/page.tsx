'use client'

import React, { useEffect, useState } from "react";
import { Tooltip, User } from "@nextui-org/react";
import { EditIcon } from "./comps/EditIcon";
import { DeleteIcon } from "./comps/DeleteIcon";
import { EyeIcon } from "./comps/EyeIcon";

type Bonsai = {
  id: string;
  nome: string;
  url: string;
  preco: string;
  categoria: string;
  [key: string]: any; // To handle any extra properties dynamically
};

const columns = [
  { uid: "image", name: "" },
  { uid: "nome", name: "Nome" },
  { uid: "preco", name: "Preço" },
  { uid: "categoria", name: "Categoria" },
  { uid: "actions", name: "Actions" }
];

export default function App() {
  const [bonsais, setBonsais] = useState<Bonsai[]>([]);

  useEffect(() => {
    fetch('/api/store/fetchbonsai/all')
      .then(response => response.json())
      .then(data => setBonsais(data));
  }, []);

  const renderCell = (bonsai: Bonsai, columnKey: string) => {
    switch (columnKey) {
      case "image":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: `/images/bonsais/${bonsai.url}/cover/cover.jpg`,
            }}
            name=""
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
            <Tooltip content="Details">
              <span className="text-lg cursor-pointer">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit bonsai">
              <span className="text-lg cursor-pointer">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete bonsai">
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

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column.uid}
                className="border-b border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700"
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bonsais.map(bonsai => (
            <tr
              key={bonsai.id}
              className="border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200 ease-in-out"
            >
              {columns.map(column => (
                <td
                  key={column.uid}
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  {renderCell(bonsai, column.uid)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}