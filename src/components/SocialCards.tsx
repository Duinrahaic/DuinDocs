import SocialCard from "./SocialCard";
import { socials } from "./Socials";

export default function SocialCards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {socials.map((social) => (
                <SocialCard key={social.name} {...social} />
            ))}
        </div>
    );
}
