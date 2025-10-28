// Importa a conexão com o banco de dados (db) e o construtor Sequelize
// - db → instância configurada da conexão com o MySQL
// - Sequelize → usado para definir tipos de dados (STRING, DOUBLE, TEXT etc.)
import  db, { Sequelize } from "./db.js"; // import 

// Define o modelo (tabela) 'produtos'
// O método .define() cria a estrutura da tabela e os tipos de dados de cada campo
const Produto = db.define("agendamentos", {
    // Campo 'nome' → armazenará o nome do produto
    nome: {
        type: Sequelize.STRING, // Tipo de dado: texto curto (VARCHAR)
        allowNull: false    // Não permite valores nulos
    },
    // Campo 'preco' → armazenará o preço do produto
    telefone: {
        type: Sequelize.STRING, // Tipo de dado: número decimal
        allowNull: false    // Campo obrigatório
    },
    // Campo 'descricao' → armazenará a descrição detalhada do produto
    servico: {
        type: Sequelize.STRING, // Tipo de dado: texto longo
        allowNull: false // Campo obrigatório
    },
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    horario: {
        type: Sequelize.TIME, 
        allowNull: false,
    },
});


// Cria a tabela no banco de dados se ela ainda não existir
// force: false → mantém os dados existentes (não apaga a tabela)
// force: true  → recria a tabela do zero (apaga todos os registros)
Produto.sync({force: false})

// Exporta o modelo para ser utilizado em outras partes da aplicação (ex: app.js)
export default Produto;