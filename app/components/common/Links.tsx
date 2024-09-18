import { ChevronsRight } from "lucide-react";
import Link from "next/link";

interface LinksProps {
  children: React.ReactNode;
  to: string;
  icon?: boolean;
}

export default function Links({ children, to, icon = true }: LinksProps) {
  return (
    <Link
      href={to}
      className="flex w-max items-center gap-1 text-sm font-medium capitalize text-[#816241] underline underline-offset-2"
    >
      {children}{" "}
      {icon && <ChevronsRight size={14} className="translate-y-px" />}
    </Link>
  );
}
