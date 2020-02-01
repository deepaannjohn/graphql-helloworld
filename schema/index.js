// import type helpers from graphql npm pacakge
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require ('graphql')

const RootQueryType = new GraphQLObjectType ({
    name: 'RootQueryType',   // special one, we need a strating point, his will be out starting point...all the fields here will bea vailable at the top level
    fields : { 
        hello : {
            type : GraphQLString,
            resolve: () => 'world'
        }
    }
})

//create a schema...schema is an instance of GraphQLSchema
const ncSchema = new GraphQLSchema({
    query: RootQueryType
})

module.exports = ncSchema