# ArtMatch 👩‍🎨

An AI-powered image generation web application that creates artwork based on textual descriptions of famous paintings. Built with Node.js, Express, and OpenAI's DALL-E API.

## Features

- **Interactive Web Interface**: Simple form to input painting descriptions
- **AI Image Generation**: Uses OpenAI's DALL-E to create images from text prompts
- **Responsive Design**: Clean, centered UI with a framed display area
- **Docker Support**: Containerized for easy development and deployment
- **Development Tools**: Nodemon for auto-restart during development

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- OpenAI API key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ImageGeneration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=3000
   ```

## Docker Setup

### Development

For development with hot reloading:

```bash
docker-compose up --build
```

This will:
- Build the development image using `Dockerfile`
- Start the app on `http://localhost:3000`
- Mount your local files for live updates
- Use Nodemon for auto-restart on file changes

### Production

For production deployment:

```bash
docker-compose -f docker-compose.prod.yml up --build
```

This uses:
- Pre-built production image: `parantaps7/image_gen:1.0.0`
- Optimized `Dockerfile.prod` for smaller image size
- Environment variables from `.env`

### Manual Docker Build

```bash
# Development
docker build -t image-gen-dev .

# Production
docker build -f Dockerfile.prod -t image-gen-prod .
```

## Usage

1. Start the application using Docker Compose (dev or prod)
2. Open `http://localhost:3000` in your browser
3. Enter a description of a famous painting (without naming it or the artist)
4. Click "Create" to generate the image
5. The generated image will appear in the framed area

## Project Structure

```
ImageGeneration/
├── Dockerfile              # Development Docker image
├── Dockerfile.prod         # Production Docker image
├── docker-compose.yml      # Development compose file
├── docker-compose.prod.yml # Production compose file
├── nodemon.json           # Nodemon configuration
├── package.json           # Node.js dependencies
├── server.js              # Express server
├── services/
│   └── processData.js     # OpenAI API integration
├── views/
│   └── index.ejs          # Main page template
├── public/
│   ├── css/
│   │   └── styles.css     # Stylesheet
│   └── js/
│       └── script.js      # Client-side JavaScript
└── .env                   # Environment variables (not in repo)
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `PORT`: Server port (default: 3000)

## API Endpoints

- `GET /`: Renders the main page
- `POST /generate-image`: Accepts JSON with `prompt` field, returns generated image URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Docker
5. Submit a pull request

## License

ISC