const express= require("express")
const dotenv = require("dotenv")

dotenv.config()

const app= express()
const API_URL = 'https://jsonplaceholder.typicode.com/users';


const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/users', async (req, res) => {
  try {
    let users = await fetchUsers();

    
    if (req.query.name) {
      const searchName = req.query.name.toLowerCase();
      users = users.filter(user => user.name.toLowerCase().includes(searchName));
    }

 
    if (req.query.sort === 'asc' || req.query.sort === 'desc') {
      users.sort((a, b) => req.query.sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})