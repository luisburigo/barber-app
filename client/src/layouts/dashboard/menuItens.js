const createItem = (icon, link, name) => ({icon, link, name});

const menuItens = [
  createItem(null, "/dashboard/funcionarios", "Funcionarios"),
  createItem(null, "/dashboard/servicos", "Serviços"),
];

export default menuItens;