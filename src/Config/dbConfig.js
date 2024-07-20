const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gu:123@cluster0.lhu6vem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( () => console.log("Deu BOM DE MAIS"))
.catch(() => console.log("Deu ruim"));