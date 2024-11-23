

const employees =[
  {
      "firstName": "Alice",
      "id": 1,
      "email": "alice@example.com",
      "password": "123",
      "taskCount": {
          "active": 1,
          "completed": 1,
          "failed": 0,
          "newTask": 1
      },
      "tasks": [
          {
              "active": true,
              "completed": false,
              "failed": false,
              "newTask": true,
              "taskTitle": "Complete Project Report",
              "taskDescription": "Finalize the report for the project and submit it.",
              "taskDate": "2023-10-15",
              "category": "Work"
          },
          {
              "active": false,
              "completed": true,
              "failed": false,
              "newTask": false,
              "taskTitle": "Team Meeting",
              "taskDescription": "Attend the weekly team meeting and provide updates.",
              "taskDate": "2023-10-10",
              "category": "Work"
          }
      ]
  },
  {
      "firstName": "Bob",
      "id": 2,
      "email": "bob@example.com",
      "password": "123",
      "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 1,
          "newTask": 2
      },
      "tasks": [
          {
              "active": true,
              "completed": false,
              "failed": false,
              "newTask": true,
              "taskTitle": "Update Website",
              "taskDescription": "Make necessary updates to the company website.",
              "taskDate": "2023-10-20",
              "category": "Development"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "newTask": false,
            "taskTitle": "Team Meeting",
            "taskDescription": "Attend the weekly team meeting and provide updates.",
            "taskDate": "2023-10-10",
            "category": "Work"
        },
        {
            "active": true,
            "completed": false,
            "failed": true,
            "newTask": true,
            "taskTitle": "Project Presentation",
            "taskDescription": "Create a presentation for the upcoming client meeting.",
            "taskDate": "2023-10-25",
            "category": "Work"
        }
      ]
  },
  {
      "firstName": "Charlie",
      "id": 3,
      "email": "charlie@example.com",
      "password": "123",
      "taskCount": {
          "active": 2,
          "completed": 1,
          "failed": 1,
          "newTask": 3
      },
      "tasks": [
          {
              "active": true,
              "completed": false,
              "failed": true,
              "newTask": true,
              "taskTitle": "Prepare Presentation",
              "taskDescription": "Create a presentation for the upcoming client meeting.",
              "taskDate": "2023-10-25",
              "category": "Work"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "newTask": true,
            "taskTitle": "Conduct Workshop Session",
            "taskDescription": "Lead a training session for new employees.",
            "taskDate": "2023-10-05",
            "category": "Training"
        },
        {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true,
            "taskTitle": "Developed LMS",
            "taskDescription": "Make necessary updates to the company website.",
            "taskDate": "2023-10-20",
            "category": "Development"
        },
      ]
  },
  {
      "firstName": "Diana",
      "id": 4,
      "email": "diana@example.com",
      "password": "123",
      "taskCount": {
          "active": 1,
          "completed": 2,
          "failed": 1,
          "newTask": 2
      },
      "tasks": [
          {
              "active": false,
              "completed": true,
              "failed": false,
              "newTask": true,
              "taskTitle": "Conduct Training Session",
              "taskDescription": "Lead a training session for new employees.",
              "taskDate": "2023-10-05",
              "category": "Training"
          },
          {
            "active": true,
            "completed": false,
            "failed": true,
            "newTask": true,
            "taskTitle": "Project Presentation",
            "taskDescription": "Create a presentation for the upcoming client meeting.",
            "taskDate": "2023-10-25",
            "category": "Work"
        },
        {
            "active": false,
            "completed": true,
            "failed": false,
            "newTask": false,
            "taskTitle": "Team Meeting",
            "taskDescription": "Attend the weekly team meeting and provide updates.",
            "taskDate": "2023-10-10",
            "category": "Work"
        }
      ]
  },
  {
      "firstName": "Ethan",
      "id": 5,
      "email": "ethan@example.com",
      "password": "123",
      "taskCount": {
          "active": 3,
          "completed": 0,
          "failed": 0,
          "newTask": 3
      },
      "tasks": [
          {
              "active": true,
              "completed": false,
              "failed": false,
              "newTask": true,
              "taskTitle": "Review Code",
              "taskDescription": "Review the code submitted by the interns.",
              "taskDate": "2023-10-18",
              "category": "Development"
          },
          {
              "active": true,
              "completed": false,
              "failed": false,
              "newTask": true,
              "taskTitle": "Client Follow-Up",
              "taskDescription": "Follow up with the client regarding their feedback.",
              "taskDate": "2023-10-22",
              "category": "Client Relations"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true,
            "taskTitle": "Developed Website",
            "taskDescription": "Make necessary updates to the company website.",
            "taskDate": "2023-10-20",
            "category": "Development"
        }
      ]
  }
]
    const admins = [
        {
            "id": 11,
            "firstName" : "Khansa",
            "email": "admin1@example.com",
            "password": "123"
        },
        {
            "id": 12,
            "firstName" : "Zainab",
            "email": "admin2@example.com",
            "password": "123"
        }   
    ] 
  

    export const setLocalStorage = () =>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admins', JSON.stringify(admins))
    }
    export const getLocalStorage = () =>{
      const employees =  JSON.parse(localStorage.getItem('employees'));
      const admins = JSON.parse(localStorage.getItem('admins'));
       
      // console.log(JSON.parse(adminData));
      return({employees, admins});
    }

    

    