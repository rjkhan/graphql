
const { ApolloServer } = require("apollo-server");
const typeDefs = require('./scheme');
const resolvers = require("./resolver");
const con = require("./db_connect");
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

//const db = require("./database_config/db_config.js");

//var dbCon = new db("project","root","root","Rabnawazs-MacBook-Pro.local",mysql);
//dbCon.create_connection();

// con.query("SELECT first_name FROM employees limit 10", function (err, result, fields) {
// 	console.log(fields);
// 	var data = JSON.parse(JSON.stringify(result))
// 	console.log(data.find(d => d["first_name"] === "Sumant"));
	
// });



const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});



