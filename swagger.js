const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Cinema API',
        description: 'Cinema API'
    },
    host:'cse-341-project2-ux8v.onrender.com',
    schemes: ['https, http']
}

const outputFile = './swagger.json'
const endpointFiles = ['./routes/index.js']

// This will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc)
