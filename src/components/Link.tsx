interface LinkProps {
    link: string;
}

function Link({link}: LinkProps) {
    return (
        <li className="text-preset-4">
            <button className="navlink cursor-pointer">{link}</button>
        </li>
    )
}

export default Link