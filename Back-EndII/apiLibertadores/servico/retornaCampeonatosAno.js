import pool from "./conexao.js";

export async function retornaCampeonatosAno(ano){
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ' + ano);
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
}