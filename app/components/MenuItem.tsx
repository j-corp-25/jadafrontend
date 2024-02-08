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
            "hover:bg-jada-purple-700 hover:text-white transition-colors duration-500 rounded ",
            isActive && "hover:bg-jada-purple-700" // Highlight the active link
        )}>
            <Link href={href}>
                <span className="block px-2 py-2 text-md font-medium">{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
