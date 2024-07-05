# To-Do List for Full-Stack Developer Challenge

### Developement Setup

```sh
#Initial DB initialisation:
docker-compose run backend python service/manage.py migrate

docker-compose up
```

Open [React Frontend (http://localhost:3000)](http://localhost:3000) with your browser to see the result.
Open [Django Backend Service(http://localhost:8000)](http://localhost:8000) with your browser to see the result.

```sh
#Enviroment Variables
POSTGRES_NAME="TODO_APP"
POSTGRES_USER="pramit"
POSTGRES_PASSWORD="password"
PGADMIN_PORT=5050
PGADMIN_DEFAULT_EMAIL="user@domain.com"
PGADMIN_DEFAULT_PASSWORD="password"
```

### Front-End Requirements
1. **User Interface**
    - [x] Form to create a new task (title, description, status)
    - [x] List of tasks with update and delete functionality
    - [x] Filter tasks by status ("All," "To Do," "In Progress," "Done")
2. **User Experience**
    - [x] Form validation (title required)
    - [x] Smooth, responsive interactions
    - [x] Use a modern front-end framework (React, Angular, Vue.js)
3. **Styling**
    - [x] Style with CSS or CSS preprocessor (SASS/SCSS)
    - [x] Optional: Use a CSS framework (Bootstrap, Material-UI, etc.)
4. **Responsive Design**
    - [x] Ensure application works on both desktop and mobile

## Back-End Requirements
5. **API Development**
    - [x] Create RESTful API for tasks (CRUD operations)
6. **Data Storage**
    - [x] Set up a database for tasks (PostgreSQL, MySQL, MongoDB, etc.)
7. **Validation**
    - [x] Server-side validation (title required, valid status)
8. **Error Handling**
    - [ ] Handle errors with appropriate messages and status codes

## General Requirements
9. **Code Quality**
    - [x] Write clean, well-documented, maintainable code
10. **Version Control**
    - [x] Use Git for version control and provide repository link
11. **Testing**
    - [ ] Write unit tests for critical parts (API endpoints, validation)
12. **Security**
    - [x] Implement basic security measures

## Bonus Features (Optional)
13. **User Authentication and Authorization**
    - [ ] Restrict access to tasks with login and registration
14. **Task Enhancements**
    - [ ] Add due dates and reminders
15. **Task Management Features**
    - [ ] Sorting and searching for tasks
16. **User Profiles**
    - [ ] Create user profiles with avatars