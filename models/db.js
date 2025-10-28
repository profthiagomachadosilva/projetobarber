// Importa o Sequelize — ORM (Object Relational Mapper) usado para conectar e manipular bancos SQL com JavaScript
import Sequelize from "sequelize";

// Importa o dotenv — responsável por carregar variáveis de ambiente do arquivo .env
import dotenv from "dotenv";

// Carrega as variáveis do arquivo .env para process.env
dotenv.config();

// Exibe no console as variáveis de ambiente carregadas (útil para debug)
// Importante: em produção, evite mostrar senhas no console!
console.log("DEBUG ENV:", {
  DB_NAME: process.env.DB_NAME, // Nome do banco de dados
  DB_USER: process.env.DB_USER,  // Usuário do banco
  DB_PASS: process.env.DB_PASS, // Senha do banco
  DB_HOST: process.env.DB_HOST // Endereço do servidor PostgreSql
});


// Cria uma nova instância do Sequelize (a conexão com o banco de dados)
const db = new Sequelize(
  process.env.DB_NAME, // Nome do banco
  process.env.DB_USER, // Usuário
  process.env.DB_PASS, // Senha
  {
    host: process.env.DB_HOST, // Endereço do servidor MySQL
    dialect: "postgres", // Tipo de banco (dialeto)
    port: 5432
  }
);

// Testa a conexão com o banco de dados
db.authenticate()
  .then(() => console.log("[DB] Conectado com sucesso ao MySQL!")) // Conexão bem-sucedida
  .catch((erro) => console.error("Erro ao se conectar com o banco de dados:", erro)); // Falha na conexão

// Exporta o construtor Sequelize (para definir tipos de dados nos models)
export { Sequelize };

// Exporta a instância configurada da conexão (para ser usada em outros arquivos)
export default db;
