const express = require('express');

const app = express();

const posts = [
    {
        title:  "lorem ipsum1",
        text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elitconsectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum2",
        text: "Lorem ipsum dolor sit amet  Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum4",
        text: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },  
    {
        title:  "lorem ipsum1",
        text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elitconsectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum2",
        text: "Lorem ipsum dolor sit amet  Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    },
    {
        title:  "lorem ipsum4",
        text: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
    }    
];

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

app.get('/posts', (req, res) => {
    let responseText = 'Hello World!';
    responseText += ' Requested at: ' + req.requestTime + '';
    res.send(responseText);
})

app.listen(3001, console.log('server starting'))