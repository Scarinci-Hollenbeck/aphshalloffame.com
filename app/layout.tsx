import GlobalNav from 'components/GlobalNav'
import { openSans } from './font'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const year = new Date().getFullYear()

  return (
    <>
      <html lang="en">
        <head>
          <meta
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
            name="viewport"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </head>
        <body className={`bg-site-darkBlue ${openSans.className} m-0 p-10`}>
          <div className="bg-white shadow-lg rounded max-w-7xl mx-auto">
            <GlobalNav />
            <div className="bg-gray-200 my-0 mx-8">{children}</div>
            <footer className="block h-14">
              <p
                className="mx-8 flex flex-row items-center"
                style={{ height: 45 }}
              >
                Asbury Park High School ©️ {year}
              </p>
            </footer>
          </div>
        </body>
      </html>
    </>
  )
}
