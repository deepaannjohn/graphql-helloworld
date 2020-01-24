const ncSchema = require('../schema')
const {graphql} = require('graphql')

const query = process.argv[2]
graphql(ncSchema, query).then(result => {
    console.log(result)
}
)