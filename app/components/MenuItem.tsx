import Link from 'next/link';
import clsx from 'clsx';

interface MenuItemProps {
    href: string;
    label: string;
    isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, isActive }) => {
    return (
        <li className={clsx(
            "hover:bg-jada-tertiary-base transition-colors duration-100 rounded-lg font-semibold mx-1 ",
            isActive && "bg-jada-tertiary-base" // Highlight the active link
        )}>
            <Link href={href}>
                <span className="block px-1 py-1 ">{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
