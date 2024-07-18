import Header from "../components/header/Header";
import PasteForm from "../components/PasteForm";
import "../components/style/App.css"

export default function MainPage() {
    return (
        <div className="wrapper">
            <Header/>
            <PasteForm/>
        </div>
    );
}