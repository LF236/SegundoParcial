const generateDB = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log('Generando Base de datos');
                require('../database/models').sequelize.sync({ force: true });
                resolve(true);
            }, 2000)

        }
        catch (err) {
            reject(false);
        }
    })

};

module.exports = generateDB;