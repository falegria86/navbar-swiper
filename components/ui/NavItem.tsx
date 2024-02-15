import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemTypes {
    link: string;
    icono: React.ReactElement | null;
    title: string;
};

export const NavItem = ({ link, icono, title }: NavItemTypes) => {
    const pathname = usePathname();

    return (
        <Link href={link}>
            <div
                className={`border-0 pb-2 select-none w-fit flex items-center mx-auto 
                ${pathname == link && "sm:border-b-2 sm:border-green-500 text-green-500"}`}
            >
                {icono}
                <p className="ml-2 hidden sm:block">{title}</p>
            </div>
        </Link>
    );
}