import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faIdCard, faCogs, faClock, faUsers} from "@fortawesome/free-solid-svg-icons";

const createItem = (icon, link, name) => ({icon, link, name});

const menuItens = [
  createItem(<FontAwesomeIcon icon={faIdCard} />, "/dashboard/funcionarios", "Funcionarios"),
  createItem(<FontAwesomeIcon icon={faCogs} />, "/dashboard/servicos", "Serviços"),
  createItem(<FontAwesomeIcon icon={faClock} />, "/dashboard/horarios", "Horarios"),
  createItem(<FontAwesomeIcon icon={faBuilding} />, "/dashboard/unidades", "Unidades"),
  createItem(<FontAwesomeIcon icon={faUsers} />, "/dashboard/clientes", "Clientes"),
];

export default menuItens;
