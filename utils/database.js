const Sequelize  = require('sequelize');
const sequelize  = new Sequelize(
    'b7ylarpkkvj72vjpct2t',
    'ukgtlvfa05jaluq7',
    'kR0XzVkq4CHh1ipkJi0A',
    {
        dialect : 'mysql',
        host: 'b7ylarpkkvj72vjpct2t-mysql.services.clever-cloud.com',
    }
);

module.exports = sequelize