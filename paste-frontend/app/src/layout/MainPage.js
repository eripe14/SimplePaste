import Header from "../components/header/Header";
import PasteForm from "../components/PasteForm";
import "../components/style/App.css"
import logo from "../assets/logo.png";

export default function MainPage() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Simple paste service</title>
                <link rel="shortcut icon" type="image/x-icon" href={logo}></link>
            </head>
            <body>
                <div className="wrapper">
                    <Header />
                    <PasteForm />
                </div>
            </body>
        </html>
    );
}