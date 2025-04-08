import Link from "./Link"

interface SocialLink {
    site: string;
    href: string;
}

interface ProfileProps {
    picture: string;
    name: string;
    location: string;
    bio: string;
    socialLinks: SocialLink[];
}

function Profile({picture, name, location, bio, socialLinks}: ProfileProps) {
    return (
    <div className="card">
        <section className="flex flex-col items-center gap-6">
            <figure>
                <img src={picture} alt="profile image" className="h-[90px] w-[90px] rounded-full" />
            </figure>
            <div className="flex flex-col gap-1 items-center">
                <span className="text-preset-1">{name}</span>
                <span className="text-preset-2">{location}</span>
            </div>
            <span className="text-preset-3">"{bio}"</span>
        </section>
        <ul className="list-none grid gap-4">
            {socialLinks.map((link, i) => <Link key={i} {...link} tabIndex={i + 1}/>)}
        </ul>
    </div>
    )
}

  export default Profile