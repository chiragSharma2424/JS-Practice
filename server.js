import exprss from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken'
const app = exprss();
const port = 3000;

app.use(cors());
app.use(exprss.json());

let USERS = [];

app.get('/', (req, res) => {
    res.json({
        msg: "Home route"
    })
});

app.post('/', (req, res) => {
    const { name, email } = req.body;
    if(!name || !email) {
        res.json({
            msg: "Please provide name, email"
        })
    } 
    const isUserAlreadyExists = USERS.forEach((user) => {
        if(user.name === name && user.email === email) {
           return
        }
    })
    if(isUserAlreadyExists) {
        res.json({
            msg: "User already exists"
        })
    } else {
        USERS.push({
            name: name,
            email: email
        })
    }
    const token = jwt.sign({ name, email }, 'chirag-24', { expiresIn: '1h' });
    
    res.json({
        msg: "User created",
        token: token,
        user: USERS
    });

    console.log(USERS);
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});