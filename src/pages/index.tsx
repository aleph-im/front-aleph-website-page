import Page, { PageProps } from '@/components/Page'
import { getPages } from '@/helpers/strapi/strapi'

export type HomeProps = {
  page: PageProps
}

export const Home = ({ page }: HomeProps) => {
  return (
    <>
      {page != undefined ? (
        <Page id={page.id} name={page.name} sections={page.sections} />
      ) : null}
    </>
  )
}

export async function getServerSideProps() {
  try {
    const [page] = await getPages(5)

    if (page) {
      return { props: { page: page } }
    }
  } catch (e) {
    console.log('Error: ', e)
  }

  // Pass data to the page via props
  return { props: { page: {} } }
}

export default Home
