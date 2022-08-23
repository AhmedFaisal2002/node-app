import express from 'express';

const app = express();

app.get('/' , (req ,res) => {
    res.send('Hello World');
});

app.get('/users' , (req , res) => {
    const arr = [
        {
            name : 'John',
            age : 30
        },
        {
            name : 'Sara',
            age : 25
        }
    ];

    res.status(200).json(arr);
});

app.listen(8000 , () => console.log(`Server is running on port 8000`));