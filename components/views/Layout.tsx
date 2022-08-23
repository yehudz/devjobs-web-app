interface LayoutProps {
  children: JSX.Element
}

import TopBar from "../ui/TopBar"
import SecondaryTopBar from "../ui/SecondaryTopBar"

const Layout: React.FC<LayoutProps> =({ children })=> {
  return (
    <main
      className="
        bg-light-grey
        dark:bg-midnight 
      "
    >
      <TopBar />
      <SecondaryTopBar />
      <main>{children}</main>
    </main>
  )
}

export default Layout