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
        <header>
            <h1>HTMX Form Handling</h1>
            <nav>
                <ul>
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