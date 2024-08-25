const express = require('express');

const app = express();

// Body parser middleware
app.use(express.json());

// routes
app.post('/bfhl', (req, res) => {
    console.log(req.body); // Debugging line
    const { data } = req.body;
    
    if (!data) {
        return res.status(400).json({ error: 'Data field is missing' });
    }
    
    const userId = 'tanesha_gahtori_13122003';
    const email = 'iamtanesha13@gmail.com';
    const rollNumber = '21BSA10088';
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(a => a === a.toLowerCase()).sort().pop();
    
    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
