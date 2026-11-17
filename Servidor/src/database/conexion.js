import mysql from 'mysql2/promise';

export async function conectar() {
    try {
        const bdd = await mysql.createPool({
            host: "Localhost",
            database: "inventario",
            user: "root",
            password: "Tannf130"
        })
        console.log("conectada !!");
        return bdd;
    } catch (error) {
        console.log(`error, base no conectada`);
    }
}