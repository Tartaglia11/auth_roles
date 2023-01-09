const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const start = async() => {
	try {
		await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.bqc5cbi.mongodb.net/auth_roles?retryWrites=true&w=majority')
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

start();