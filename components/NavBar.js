import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <div>
                <Link legacyBehavior href="/">
                    <a><h1>Home</h1></a>
                </Link>
            </div>
            <style jsx>{`
                a{
                    text-decoration: none;
                    color: orange;
                    font-weight: border;
                }
            `}</style>

        </nav>
    )
}