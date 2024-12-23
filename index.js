const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());



const candidates = [
    { name: "Kalpana", skills: "React, Node.js", yearsOfExperience: 5 },
    { name: "Tanya", skills: "Angular, Express", yearsOfExperience: 3 },
    { name: "Bhavya", skills: "Vue, JavaScript", yearsOfExperience: 4 },
    { name: "Palak", skills: "Python, Django", yearsOfExperience: 7 },
    { name: "Sans", skills: "Java, Spring", yearsOfExperience: 6 },
    { name: "Nishu", skills: "C#, .NET", yearsOfExperience: 5 },
    { name: "Raz", skills: "Ruby, Rails", yearsOfExperience: 2 },
    { name: "Hank", skills: "PHP, Laravel", yearsOfExperience: 8 },
    { name: "Ricky", skills: "C++, Qt", yearsOfExperience: 4 },
    { name: "Jack", skills: "Go, Kubernetes", yearsOfExperience: 3 },

    
];


app.get("/api/candidates", (req, res) => {
    res.json(candidates);
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

