import { Sequelize } from "sequelize-typescript";

const Host: string = '192.168.1.211';
const Port: number = 3306;

const User: string = 'Caleb';
const Password: string = '#husky4Life';
const Database: string = '';

const sequelize = new Sequelize({
    database: 'Pokedex',
    dialect: 'mariadb',
    username: User,
    password: Password,
    host: Host,
    port: Port,
    models: ['/models/**/*.model.ts'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    },
});

export default sequelize;