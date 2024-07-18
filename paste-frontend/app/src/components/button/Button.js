export default function Button({content, destination, additionalStyle}) {
    return (
        <a href={destination} style={{textDecoration: "none", color: "#eee"}}>
            <button className="button" style={additionalStyle}>{content}</button>
        </a>
    );
}