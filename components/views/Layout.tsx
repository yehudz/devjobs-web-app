interface LayoutProps {
  children: JSX.Element
}

import TopBar from "../ui/TopBar"

const Layout: React.FC<LayoutProps> =({ children })=> {
  return (
    <main
      className="
        bg-light-grey
        dark:bg-midnight 
      "
    >
      <TopBar />
      <main>{children}</main>
    </main>
  )
}

export default Layout