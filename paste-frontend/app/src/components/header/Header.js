import React, {useState} from "react";
import logo from "../../assets/logo.png";
import Button from "../button/Button";

export default function Header() {
    const [showImage, setShowImage] = useState(false);
    const headerStyle = {
        backgroundColor: "#202327",
        color: "#eee",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    }
    const h1Style = {
        transition: "all 0.3s ease",
        transform: showImage ? "scale(1.05)" : "scale(1)",
    };
    const buttonStyle = {
        marginLeft: "auto",
        marginRight: "20px",
    }

    return (
        <header style={headerStyle}>
            <a href={"/"}><img src={logo} alt={"logo"} style={{height: "40px", paddingRight: "20px"}}/></a>
            <a href={"/"} style={{textDecoration: "none", color: "#eee"}}>
                <h1
                    onMouseEnter={() => setShowImage(true)}
                    onMouseLeave={() => setShowImage(false)}
                    style={h1Style}
                >SimplePaste - A simple paste service</h1>
            </a>
            <Button content={"Dashboard"} destination={"/dashboard"} additionalStyle={buttonStyle} />
        </header>
    )
}