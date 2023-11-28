const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files (e.g., HTML, CSS, images) from the 'public' directory

app.get('/plants', (req, res) => {
    // Sample plant data
    const plants = [
        { name: "Snake Plant", price: 20, image: "snake_plant.jpeg" },
        { name: "Peace Lily", price: 25, image: "peace_lily.jpeg" },
        // Add more plant data as needed
    ];

    res.json(plants);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
