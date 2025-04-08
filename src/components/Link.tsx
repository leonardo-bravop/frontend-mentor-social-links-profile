interface LinkProps {
    site: string;
    href: string;
    tabIndex: number;
}

function Link({site, href, tabIndex}: LinkProps) {
    return (
        <li className="text-preset-4">
            <a
                className="navlink cursor-pointer"
                tabIndex={tabIndex}
                href={href}
                target="_blank"
            >
                {site}
            </a>
        </li>
    )
}

export default Link