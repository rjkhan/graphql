const { gql } = require("apollo-server");


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

	scalar Date
	type Employees
	{
		emp_no: ID!,
		birth_date: Date,
		first_name: String,
		last_name: String,
		gender: String,
		hire_date: Date
	}


	type Query {
		getEmployee(emp_no: ID!): Employees
		getAllEmployee: [Employees]
	}



`;



module.exports = typeDefs;