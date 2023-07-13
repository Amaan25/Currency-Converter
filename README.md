# Exchange Rates Data

## Interface

This project shows information about the trend of exchange rate of a certain currency with respect to a base currency in the form of graphs. The user can enter the base currency and the currency of which the trend is to be analysed, as well as the time period for which the graph is to be displayed. We can also choose the fields for displaying weekly, monthly or yearly data as per our choice.

The chart also displays the maximum and the minimum rates for the entered duration along with the dates of these rates.

## Input

The input data is read from a set of csv files that each store the data of exchange rates of all currencies of every day in a given year.

## Implementation

We have built this project usign MERN stack. The input read from csv files is stored in a MongoDB database on MongoDB Atlas. React is the JavaScript library used for building interfaces. The server environment is implemented through NodeJs and Express acts as a backend web application framework.

## Schema

The implementation of the schema involves storing the name, currency and the country code, of a country along with an array that stores the set of information of exchange rates, date and month for a particular year.

```js
const country = new mongoose.Schema({
	name: String,
	currency: String,
	code: String,

	yearData: [
		{
			year: Number,
			data: [
				{
					date: Number,
					month: Number,
					rate: Number,
				},
			],
		},
	],
});
```

## Contributors

Hackathon Team 5:
Kishan Rakesh Verma
Shivam Diwal Padwal
Solleti Likhith Sanjay
Sejal Vivek Kala
Amaan Athar Khan
