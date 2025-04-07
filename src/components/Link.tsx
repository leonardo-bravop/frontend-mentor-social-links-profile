interface LinkProps {
    link: string;
}

function Link({link}: LinkProps) {
    return (<li className="navlink text-preset-4">{link}</li>)
}

export default Link