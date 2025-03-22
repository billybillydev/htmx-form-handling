export function Header() {
    const menu = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Newsletter",
        href: "/newsletter",
      },
      {
        label: "Login",
        href: "/login",
      },
    ];

    return (
        <header class={"flex items-center justify-between border-b-2 gap-x-8 p-8"}>
            <h1>HTMX Form Handling</h1>
            <nav>
                <ul class={"flex gap-x-4"}>
                    {menu.map((item) => (
                        <li>
                            <a class="link" href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}