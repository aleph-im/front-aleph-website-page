import { useHomePage } from '@/hooks/useHomePage'
import Page from '@/components/Page'

export type CmsProps = {
  items: PageItemProps[]
  content: string
  gap?: string
}

export type PageItemProps = {
  number: number
  title: string
  subtitle: string
  content: string
}

export const Cms = ({ items }: CmsProps) => {
  const { page } = useHomePage()

  return (
    <>
      {page != undefined ? (
        <Page id={page.id} name={page.name} sections={page.sections} />
      ) : (
        <div>Nothing to show</div>
      )}
    </>
  )
}

export default Cms
