const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

const students = [
    // Add your 100 student records here
    {
        "student_id": "1",
        "name": "Alice Johnson",
        "marks": {
            "math": 85,
            "science": 90,
            "english": 78,
            "history": 88,
            "geography": 92
        },
        "total": 433
    },
    {
      "student_id": "2",
      "name": "Bob Smith",
      "marks": {
          "math": 78,
          "science": 82,
          "english": 80,
          "history": 75,
          "geography": 85
      },
      "total": 400
  },
  {
      "student_id": "3",
      "name": "Charlie Brown",
      "marks": {
          "math": 92,
          "science": 95,
          "english": 88,
          "history": 90,
          "geography": 94
      },
      "total": 459
  },
  {
      "student_id": "4",
      "name": "David Lee",
      "marks": {
          "math": 70,
          "science": 65,
          "english": 72,
          "history": 68,
          "geography": 74
      },
      "total": 349
  },
  {
      "student_id": "5",
      "name": "Emily Davis",
      "marks": {
          "math": 88,
          "science": 91,
          "english": 84,
          "history": 86,
          "geography": 89
      },
      "total": 438
  },

  {
    "student_id": "6",
    "name": "Franklin Harris",
    "marks": {
        "math": 76,
        "science": 80,
        "english": 79,
        "history": 72,
        "geography": 81
    },
    "total": 388
},
{
    "student_id": "7",
    "name": "Grace Walker",
    "marks": {
        "math": 90,
        "science": 94,
        "english": 88,
        "history": 85,
        "geography": 93
    },
    "total": 450
},
{
    "student_id": "8",
    "name": "Henry Martinez",
    "marks": {
        "math": 82,
        "science": 87,
        "english": 80,
        "history": 78,
        "geography": 86
    },
    "total": 413
},
{
    "student_id": "9",
    "name": "Isabella Thomas",
    "marks": {
        "math": 95,
        "science": 98,
        "english": 92,
        "history": 97,
        "geography": 96
    },
    "total": 478
},
{
    "student_id": "10",
    "name": "Jack Robinson",
    "marks": {
        "math": 68,
        "science": 72,
        "english": 70,
        "history": 65,
        "geography": 74
    },
    "total": 349
},
{
    "student_id": "11",
    "name": "Kelly White",
    "marks": {
        "math": 88,
        "science": 90,
        "english": 85,
        "history": 87,
        "geography": 89
    },
    "total": 439
},
{
    "student_id": "12",
    "name": "Liam Anderson",
    "marks": {
        "math": 79,
        "science": 84,
        "english": 80,
        "history": 76,
        "geography": 82
    },
    "total": 401
},
{
    "student_id": "13",
    "name": "Mia Clark",
    "marks": {
        "math": 91,
        "science": 93,
        "english": 90,
        "history": 92,
        "geography": 95
    },
    "total": 461
},
{
    "student_id": "14",
    "name": "Noah Lewis",
    "marks": {
        "math": 85,
        "science": 87,
        "english": 83,
        "history": 82,
        "geography": 88
    },
    "total": 425
},
{
    "student_id": "15",
    "name": "Olivia Hall",
    "marks": {
        "math": 97,
        "science": 99,
        "english": 95,
        "history": 96,
        "geography": 98
    },
    "total": 485
}
];


app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.post('/students/above-threshold', (req, res) => {
    const threshold = req.body.threshold;

    if (typeof threshold !== 'number' || threshold < 0) {
        return res.status(400).json({ error: 'Invalid threshold value' });
    }

    const filteredStudents = students.filter(student => student.total > threshold);
    const response = {
        count: filteredStudents.length,
        students: filteredStudents.map(student => ({
            name: student.name,
            total: student.total
        }))
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});