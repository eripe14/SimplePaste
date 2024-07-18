export default function MenuItem({content, consumer}) {
    const handleClick = () => {
        if (typeof consumer === "function") {
            consumer();
        }
    }

    return (
        <li onClick={handleClick} className="menu-item">
            {content}
        </li>
    );
}