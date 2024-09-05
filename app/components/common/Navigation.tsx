import Link from "next/link";

export default function Navigation({
  to,
  title,
  icon,
}: {
  to: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      className="flex items-center gap-2 fill-brown capitalize text-brown"
    >
      {icon}
      <p className="text-current">{title}</p>
    </Link>
  );
}
