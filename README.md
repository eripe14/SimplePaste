# SimplePaste

SimplePaste is a lightweight paste service for developers. It allows users to quickly and easily share code snippets, logs, configs, or any text via a simple web interface. Built with Java for backend robustness and JavaScript, HTML, and CSS for a responsive frontend, SimplePaste delivers a fast and user-friendly experience.

## Features

- **Instant Paste Creation**: Share code or text in seconds.
- **Syntax Highlighting**: Readable code with automatic syntax detection (if supported).
- **User-Friendly Interface**: Clean, minimal design for distraction-free sharing.
- **Secure & Private**: Pasted content can be set to expire or remain private.
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Backend**: Java (Spring Boot or similar)
- **Frontend**: JavaScript, HTML, CSS

## Getting Started

### Prerequisites

- Java 11+ installed
- Node.js and npm (for frontend development)

### Clone the Repository

```bash
git clone https://github.com/eripe14/SimplePaste.git
cd SimplePaste
```

### Build and Run (Backend)

```bash
# If using Maven
mvn clean install
mvn spring-boot:run
```

### Build and Run (Frontend)

Navigate to the frontend directory (if applicable):

```bash
cd frontend
npm install
npm start
```

### Access the Application

Open your browser and go to:  
`http://localhost:8080`

## Usage

1. Paste your code or text in the provided textarea.
2. (Optional) Set expiration or privacy options.
3. Click "Create Paste".
4. Share the generated link!

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

**SimplePaste** – a pastebin for developers, by developers.
