import 'styles/global.css'
import GlobalNav from './globla-nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[]
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=" "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="p-0 m-0 bg-site-darkBlue text-site-openSans">
        <div className="my-5 bg-white shadow-lg rounded max-w-7xl mx-auto  py-3 px-2">
          <GlobalNav />
          {children}
        </div>
      </body>
    </html>
  )
}
