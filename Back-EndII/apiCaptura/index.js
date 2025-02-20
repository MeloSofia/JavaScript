import express from 'express';

app.get('/usuarios')

// //import express from 'express';
// import cors from 'cors';
// import mysql from 'mysql2/promise';

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Configuração do banco de dados
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'sua_senha',
//     database: 'seu_banco',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// // Função para validar nome, email e telefone
// const validarDados = ({ nome, email, telefone }) => {
//     if (typeof nome === 'string' && nome.trim().length >= 2) {
//         if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//             if (/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// };

// // Rota para cadastrar usuários
// app.post('/usuarios', async (req, res) => {
//     const { nome, email, telefone } = req.body;

//     if (!validarDados({ nome, email, telefone })) {
//         res.status(400).json({ mensagem: 'Dados inválidos. Verifique nome, email e telefone.' });
//     } else {
//         try {
//             const [resultado] = await pool.execute(
//                 'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)',
//                 [nome, email, telefone]
//             );
//             res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: resultado.insertId });
//         } catch (erro) {
//             console.error('Erro ao inserir usuário:', erro);
//             res.status(500).json({ mensagem: 'Erro interno do servidor' });
//         }
//     }
// });

// app.listen(9000, () => {
//     console.log('Servidor rodando na porta 9000');
// });