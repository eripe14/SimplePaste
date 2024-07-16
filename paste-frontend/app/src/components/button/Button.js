export default function Button({content, destination, additionalStyle}) {
    const baseStyle = {
        backgroundColor: "#4a9eff",
        color: "#eee",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        margin: "10px",
        fontSize: "18px"
    };

    const style = {
        ...baseStyle,
        ...additionalStyle
    }

    return (
        <a href={destination} style={{textDecoration: "none", color: "#eee"}}>
            <button style={style}>{content}</button>
        </a>
    );
}