import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // importante para o Render
      }
    },
    logging: false
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

