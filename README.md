# Rubik

**Rubik** is a comprehensive toolkit designed to enhance frontend security by automating common security tasks and providing valuable insights. Whether you're a developer looking to bolster your application's security or a team needing efficient tools to manage security tasks, Rubik offers a suite of features to streamline your workflow.

## Table of Contents

1. [Features](#features)
   - [AutoTakedown](#autotakedown)
   - [Password Generator](#password-generator)
   - [Domain Tracer](#domain-tracer)
   - [Frontend Security Notes](#frontend-security-notes)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Support](#support)

## Features

### AutoTakedown
- **Summary**: Streamline takedown requests with automated processing.
- **Description**: Upload the content you want addressed, and the tool handles the rest, ensuring swift and efficient removal.
- **Access**: [AutoTakedown](https://rubiktoolkit.vercel.app/dashboard/autotakedown)
![AutoTakedown Screenshot](/frontend/public/images/AutoTakedown-dark.png)

### Password Generator
- **Summary**: Generate strong, secure passwords tailored to your needs.
- **Description**: Customize your passwords by adjusting length and complexity to ensure they are robust and unique.
- **Access**: [Password Generator](https://rubiktoolkit.vercel.app/dashboard/passwordgenerator)
![AutoTakedown Screenshot](/frontend/public/images/PasswordGenerator-dark.png)

### Domain Tracer
- **Summary**: Effortlessly trace and gather domain details.
- **Description**: Get comprehensive information and insights about any domain by simply entering its name.
- **Access**: [Domain Tracer](https://rubiktoolkit.vercel.app/dashboard/domaintracer)
![AutoTakedown Screenshot](/frontend/public/images/DomainTracer-dark.png)

### Frontend Security Notes
- **Summary**: Access detailed notes and guidelines on frontend security best practices.
- **Description**: Enhance your knowledge and skills to protect your applications from vulnerabilities.
- **Access**: [Frontend Security Notes](https://rubiktoolkit.vercel.app/dashboard/notes)

## Tech Stack

- **Frontend**: Next.js, ShadCN, TailwindCSS
- **Backend**: Flask
- **Authentication**: Clerk

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- Python (v3.8 or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rubik.git
   ```
2. **Frontend Setup**:
   - Navigate to the frontend directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Backend Setup**:
   - Navigate to the backend directory, set up a virtual environment, and install dependencies:
     ```bash
     cd backend
     python -m venv venv
     source venv/bin/activate
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```bash
     flask run
     ```

## Usage

After setting up the project, you can access the dashboard to use the following features:

- **AutoTakedown**: Manage takedown requests.
- **Password Generator**: Generate secure passwords.
- **Domain Tracer**: Investigate domain details.
- **Frontend Security Notes**: Review and apply security best practices.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

Please ensure your code follows the project’s coding standards and include tests where applicable.

## License

This project is licensed under the Creative Commons CC0 License. See the [LICENSE](./LICENSE) file for more details.

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub or contact us directly at imailrishabhgupta@gmail.com.
