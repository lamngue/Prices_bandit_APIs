module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'L4md3pz4i@',
    DB: 'prices_bandit_swagger',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}