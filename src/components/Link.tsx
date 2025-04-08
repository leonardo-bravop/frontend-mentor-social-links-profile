interface LinkProps {
    link: string;
    tabIndex: number;
}

function Link({link, tabIndex}: LinkProps) {
    return (
        <li className="text-preset-4">
            <button className="navlink cursor-pointer" tabIndex={tabIndex}>{link}</button>
        </li>
    )
}

export default Link