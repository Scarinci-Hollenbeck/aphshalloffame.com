import GlobalNav from 'components/shared/GlobalNav'

const SiteLayout = ({ children }: { children: React.ReactNode[] }) => {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="bg-white shadow-lg rounded max-w-7xl mx-auto">
        <GlobalNav />
        <div className="bg-gray-200 my-0 mx-8">{children}</div>
        <footer className="block h-14">
          <p className="mx-8 flex flex-row items-center" style={{ height: 45 }}>
            Asbury Park High School ©️ {year}
          </p>
        </footer>
      </div>
    </>
  )
}

export default SiteLayout
