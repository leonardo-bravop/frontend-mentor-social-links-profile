interface LinkProps {
    site: string;
    href: string;
}

function Link({site, href}: LinkProps) {
    return (
        <li className="text-preset-4">
            <a
                className="navlink cursor-pointer"
                tabIndex={0}
                href={href}
                target="_blank"
            >
                {site}
            </a>
        </li>
    )
}

export default Link