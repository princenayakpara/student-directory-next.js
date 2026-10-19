"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
export default function Header() {
  const path = usePathname();
  const links = [{ href: "/students", label: "Students" }, { href: "/departments", label: "Departments" }, { href: "/about", label: "About" }];
  return <header className="site-header"><div className="nav-inner"><Link className="brand" href="/students"><GraduationCap size={25} strokeWidth={2.5}/><span>Campus Directory</span></Link><nav aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} className={`nav-link ${path.startsWith(link.href) ? "active" : ""}`}>{link.label}</Link>)}</nav><span className="practice-badge">Frontend Practice</span></div></header>;
}