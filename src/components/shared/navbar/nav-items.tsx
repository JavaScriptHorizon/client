import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavItemsProps {
  items: { name: string; path: string }[];
}
const NavItems = ({ items }: NavItemsProps) => {
  const pathname = useLocation().pathname;

  return (
    <ul className="flex items-center justify-center gap-x-6">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className={cn("text-muted-foreground capitalize", {
              "text-primary": pathname === item.path,
            })}
            to={item.path}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
