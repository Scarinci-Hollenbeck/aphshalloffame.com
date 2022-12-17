import SiteLayout from 'layouts/SiteLayout'
import PageTitle from 'components/shared/PageTitle'

const Page404 = () => (
  <SiteLayout>
    <PageTitle title="404: Page not found" />
    <p className="m-4">Sorry, the page you are looking for cannot be found.</p>
  </SiteLayout>
)

export default Page404
