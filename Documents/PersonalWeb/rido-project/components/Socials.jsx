import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const social = [
    { icons: <FaInstagram />, path: "https://www.instagram.com/ridhoritoss/" },
    { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/alfi-ridha-marifat-6463a4227/" },
    { icons: <FaGithub />, path: "https://github.com/ridoritoss" },
    { icons: <FaDiscord />, path: "https://discord.com/channels/@me" },
];

const Socials = ({ containerStyle, iconStyle }) => {
    return (
        <div className={containerStyle}>
            {social.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.path} 
                    className={iconStyle} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {item.icons}
                </Link>
            ))}
        </div>
    );
}

export default Socials;
