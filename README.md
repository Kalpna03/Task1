Candidate List Viewer
A simple React application that allows users to view a list of candidates, filter them by name or skills, and sort them by years of experience. The data is fetched from a backend API.

Features
Search: Search for candidates by name or skills.
<img width="955" alt="{B24C3BB3-3051-46B7-93FD-A2648F26E952}" src="https://github.com/user-attachments/assets/92413269-35d5-43ba-bf6f-8c20369f57ec" />

<img width="959" alt="{8AE4993C-CCEE-4855-962A-87CA6EDB431D}" src="https://github.com/user-attachments/assets/c2c3ac6a-3e02-44ca-b967-1932b3aac3bb" />

<img width="960" alt="{287FE96B-9487-4BD8-9992-6B891FF1229B}" src="https://github.com/user-attachments/assets/434d20d2-6f6a-4712-8e6f-048eabc96d07" />

<img width="956" alt="{B55B3CA3-1181-40EB-9F44-6218BB7424BB}" src="https://github.com/user-attachments/assets/6eafc9ee-af69-405d-a508-a9c19272b2d9" />



Sort: Sort candidates by years of experience in ascending or descending order.

<img width="955" alt="{869B04BA-AA80-4327-8089-8402A81D51F5}" src="https://github.com/user-attachments/assets/8eddbcb8-f608-4c9b-9deb-5750d05770e6" />

<img width="960" alt="{DBBFE630-C4AD-49AD-8A0C-A476014823BA}" src="https://github.com/user-attachments/assets/6f2c0a72-c622-47f1-9065-5c594256131d" />


Table View: Display the list of candidates in a clean, easy-to-read table format.
Responsive: The application is responsive and works well on both desktop and mobile devices.
Technologies Used
Frontend: React.js
API: Fetch API to retrieve data from the backend
CSS: Inline styles for simple layout and styling
Setup and Installation
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (Version 14.x or higher)
npm (Node Package Manager)
Steps to Run the Project Locally
Clone the repository:

bash
Copy code
git clone https://github.com/YourUsername/candidate-list-viewer.git
Navigate to the project directory:

bash
Copy code
cd candidate-list-viewer
Install the required dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
This will open the application in your default browser.

Visit http://localhost:3000 to view the app in your browser.

API
The application fetches data from the following backend API endpoint:

bash
Copy code
GET http://localhost:5000/api/candidates
The API returns a list of candidates with the following fields:

name: The candidate's name.
skills: Skills the candidate has.
yearsOfExperience: The number of years of experience the candidate has.
Folder Structure
graphql
Copy code
candidate-list-viewer/
├── public/
│   └── index.html          # The main HTML file
├── src/
│   ├── App.js              # The main React component
│   ├── index.js            # Entry point for React
│   └── styles.css          # (Optional) External styles for the app
├── package.json            # Project dependencies and configurations
└── README.md               # Project documentation
Contribution
If you'd like to contribute to this project, feel free to fork the repository, submit issues, or create pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
