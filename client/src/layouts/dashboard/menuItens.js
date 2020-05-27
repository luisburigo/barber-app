const createItem = (icon, link, name) => ({icon, link, name});

const menuItens = [
  createItem(null, "/dashboard/funcionarios", "Funcionarios"),
  createItem(null, "/dashboard/servicos", "Serviços"),
  createItem(null, "/dashboard/clientes", "Clientes"),
];

export default menuItens;
