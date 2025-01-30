
# Project Name

This project is a **full-stack web application** utilizing modern technologies and adhering to **MVC architecture** and **clean code principles**.

## **Table of Contents**
1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Features Implemented](#features-implemented)
4. [Setup Instructions](#setup-instructions)
5. [Technical Decisions](#technical-decisions)
6. [Contributing](#contributing)

---

## **Project Description**

This project was built to leverage modern tools and frameworks for fast, responsive, and scalable development. It integrates a **React (TypeScript)** frontend, a **Laravel** backend, and **Supabase (PostgreSQL)** for data management. The UI is enhanced with **MUI** and **Tailwind CSS** for a sleek, user-friendly interface.

---

## **Technologies Used**

### **Frontend**
- React (TypeScript)
- Tailwind CSS
- Material UI (MUI)
- Inertia.js for SPA routing

### **Backend**
- Laravel Framework (PHP 8.2)
- Sanctum (for authentication)
- Supabase with PostgreSQL
- Composer (package management)

### **Development Tools**
- Vite (for hot module replacement and fast builds)
- TypeScript (type-safe JavaScript)
- Laravel Breeze (for starter scaffolding)
- Docker / Laravel Sail (optional for development environment)

---

## **Features Implemented**

- **User Authentication**: Provided by Laravel Breeze (which uses Sanctum under the hood) and Inertia.js.
- **Responsive UI**: Built with Tailwind CSS and Material UI components.
- **SPA Navigation**: Smooth transitions with Inertia.js.
- **Clean Code Structure**: Following MVC and clean code principles to enhance maintainability and scalability.
- **Database Integration**: PostgreSQL database managed via Supabase, using models and migrations.

---

## **Setup Instructions**

### **1. Prerequisites**
Ensure you have **PHP 8.4** or higher installed. Additionally, enable the following extensions in your `php.ini` file by removing the `;` at the beginning of these lines:

```ini
; extension=pdo_pgsql
; extension=pgsql
```

### **2. Run the Setup Script**
Execute the `setup.sh` script to automate the setup process. Use the following commands in a terminal:

```bash
chmod +x setup.sh
./setup.sh
```

### **3. Access the Project**
After the setup is complete, you can access the project through your web browser by visiting the local host URL where the project is served.

---

## **Technical Decisions**

### **1. MVC and Clean Code**
The application follows the **Model-View-Controller (MVC)** pattern to separate concerns and make the codebase more maintainable. This approach allows the backend logic, UI components, and data access to be decoupled for better scalability and testability.

### **2. React with TypeScript**
TypeScript was chosen to ensure strong typing and reduce runtime errors, enhancing the overall stability of the application. It also integrates seamlessly with React for building reusable and maintainable components.

### **3. Styling with Tailwind CSS and Material UI**
To balance flexibility and rapid prototyping, **Tailwind CSS** was used for custom styles, while **Material UI** (MUI) provided pre-built, accessible components.

### **4. PostgreSQL with Supabase**
PostgreSQL was selected for its reliability and scalability. Supabase acts as a backend-as-a-service, simplifying authentication and real-time data synchronization.

### **5. Vite for Development**
Vite was used for its fast development server and hot module replacement (HMR), ensuring a smooth development experience without long build times.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/new-feature-name`).
3. Commit your changes.
4. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).
