// import necessary modules
import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import { processData } from './services/processData.js';

// create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
// middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.join(process.cwd(), "views"));

// define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/generate-image', async (req, res) => {
    console.log('Received prompt:', req.body.prompt)
    let imageResponse;
    try {
        imageResponse = await processData(req.body.prompt);
        // imageResponse = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
    } catch (error) {
        console.log("OpenAI failed:", error);
    }
    if (imageResponse) {
        res.json({ image: imageResponse });
    }
})
// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
