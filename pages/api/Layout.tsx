interface LayoutProps {
  children: JSX.Element
}

import TopBar from "../../components/ui/TopBar"

const Layout: React.FC<LayoutProps> =({ children })=> {
  return (
    <>
      <TopBar />
      <main>{children}</main>
    </>
  )
}

export default Layout