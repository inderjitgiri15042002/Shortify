# LinkSnap - URL Shortener

LinkSnap is a simple and efficient URL shortener application that allows users to create short, shareable links from long URLs. It also tracks the number of visits for each shortened URL, providing a detailed analytics dashboard for monitoring link usage.

The application uses **EJS (Embedded JavaScript templates)** to render dynamic HTML content, providing a seamless user experience for generating and viewing shortened URLs, along with their analytics.

## Features
- Generate short URLs from long URLs.
- Track and display total visits for each URL.
- View detailed visit history for each shortened URL.
- User-friendly interface with real-time analytics.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript templates)
- **URL Shortening**: shortid
- **Analytics**: Store visit history in MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/linksnap.git
   cd linksnap
Install the dependencies:

bash
Copy
Edit
npm install
Set up MongoDB: Ensure that MongoDB is running locally, or set up a cloud MongoDB service like MongoDB Atlas. Update the connection URL in the code (connectToMongoDB in the index.js file).

Start the server:

bash
Copy
Edit
npm start
Open the app in your browser at http://localhost:8001.

Endpoints
POST /url: Generate a new shortened URL.

GET /url/:shortId: Redirects to the original URL based on the short ID.

GET /url/analytics/:shortId: Retrieves analytics (total visits and visit history) for a specific short URL.

EJS Templating
The project uses EJS for dynamic content rendering:

Home Page (home.ejs): This page includes the form to enter a URL and generates a shortened link after submission.

Displays all previously shortened URLs.

Shows total visits and visit history for each URL.

Usage
Create a Short URL: Enter your long URL in the form and click "Generate".

The form uses the POST /url endpoint.

Once a URL is shortened, the page dynamically shows the shortened URL using EJS.

View All URLs: The application dynamically displays all generated shortened URLs on the home page, including visit counts and history.

Visit Analytics: Each shortened URL has a link to its analytics, which shows total visits and visit history.

Example
Generate a URL:

Access the form at http://localhost:8001/url

Example of shortened URL:

A shortened URL will be displayed as http://localhost:8001/url/abcd1234.

Visit the analytics for the shortened URL:

Visit http://localhost:8001/url/analytics/abcd1234 to see detailed visit history.

Contributing
Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Make your changes

Commit your changes (git commit -am 'Add your feature')

Push to the branch (git push origin feature/your-feature)

Open a pull request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to shortid for URL short ID generation.

MongoDB for the database storage.

Express.js for building the web application.

EJS for rendering dynamic HTML content.

vbnet
Copy
Edit

### Key Points:
1. **EJS** is mentioned in the **Frontend** and **EJS Templating** section to clarify that the project uses EJS for rendering dynamic content such as shortened URLs and visit history.
2. **Dynamic Rendering**: EJS is used to render URLs and analytics (total visits, visit history) on the homepage and analytics page.

This should give clear information on how EJS is being utilized within the project. Let
