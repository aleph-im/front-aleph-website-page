import E_ from '../errors'
import {defaultStrapiApiURL, defaultStrapiURL, pagesApiName, sectionsApiName,} from '../constants'
import {SectionProps} from '@/components/Section'
import {PageProps} from '@/components/Page'
import {StrapiPage, StrapiSection} from './types'
import {adaptComponent} from '@/helpers/strapi/adapters'

const queryParams = {
  populate: 'populate',
  preview: 'publicationState=preview',
  filter: 'filters',
}

export type Filter = {
  field: string
  operator: FilterOperator
  value: string | string[]
}

export type Population = {
  field: string
}

enum FilterOperator {
  in = '$in',
  eq = '$eq',
}

export type StrapiPagesResponse = {
  data: StrapiPage[]
  meta: any
}

export type StrapiPageResponse = {
  data: StrapiPage
  meta: any
}

export type StrapiSectionsResponse = {
  data: StrapiSection[]
  meta: any
}

const getFilters = (filters: Filter[]) => {
  let inOps = 0
  const items = filters.map((filter) => {
    let filterStr = `${queryParams.filter}[${filter.field}]`
    if (filter.operator === FilterOperator.in) {
      filterStr += `[${inOps}]`
      inOps++
    }
    filterStr += `=${filter.value}`
    return filterStr
  })
  return items.join('&')
}

const getPopulations = (populations: Population[]) => {
  let pops = 0
  const items = populations.map((population) => {
    const filterStr = `${queryParams.populate}[${pops}]=${population.field}`
    pops++
    return filterStr
  })
  return items.join('&')
}

/**
 * Gets the Strapi API url with his query params
 */
const getStrapiURL = (
  base: string,
  type: string,
  filters: Filter[],
  populations: Population[],
  onlyPublished = true,
) => {
  const url = base + type
  const params: string[] = []
  if (filters.length > 0) {
    params.push(getFilters(filters))
  }
  if (getPopulations.length > 0) {
    params.push(getPopulations(populations))
  }
  if (!onlyPublished) {
    params.push(queryParams.preview)
  }
  if (params.length > 0) {
    return url + '?' + params.join('&')
  }
  return url
}

/**
 * Gets the Strapi API url with his query params
 */
export const getStrapiUploadsURL = (path: string) => {
  return defaultStrapiURL + path
}

/**
 * Gets all the pages from Strapi API
 */
export const getPages = async (
  pageId?: number,
  onlyPublished = true,
): Promise<PageProps[]> => {
  try {
    const urlPath = pagesApiName + '/' + pageId
    const populate = [{ field: 'sections' }]
    const url = getStrapiURL(
      defaultStrapiApiURL,
      urlPath,
      [],
      populate,
      onlyPublished,
    )
    const req = await fetch(url)
    const response = await req.json()
    return await dealPagesResponse(response)
  } catch (err) {
    throw E_.RequestFailed(err)
  }
}

/**
 * Process the pages response from Strapi API
 */
const dealPagesResponse = async (
  response: StrapiPagesResponse | StrapiPageResponse,
): Promise<PageProps[]> => {
  const pages = Array.isArray(response.data) ? response.data : [response.data]
  const result = []
  if (pages.length > 0) {
    for (const page of pages) {
      const sectionIds = page.attributes.sections.data.map(
        (section) => section.id,
      )
      const sections = await getSections(sectionIds)
      const orderedSections = sections.sort(
        (a, b) => sectionIds.indexOf(a.id) - sectionIds.indexOf(b.id),
      )
      result.push({
        id: page.id,
        name: page.attributes.Name,
        sections: orderedSections,
      })
    }
  }
  return result
}

export const populateDynamicZones = (): Population[] => {
  const zones = ['components', 'components1', 'components2', 'components3']
  const fields = [
    'image',
    'images.image',
    'items',
    'icon',
    'title',
    'signMeUpForm',
  ]
  const populations: string[] = []
  zones.forEach((zone) => {
    fields.forEach((field) => {
      populations.push(zone + '.' + field)
    })
  })
  return populations.map((population) => {
    return {
      field: population,
    }
  })
}

/**
 * Gets all the sections from Strapi API
 */
export const getSections = async (ids: number[]): Promise<SectionProps[]> => {
  try {
    const filters = ids.map((id) => {
      return {
        field: 'id',
        operator: FilterOperator.in,
        value: id.toString(),
      }
    })
    const url = getStrapiURL(
      defaultStrapiApiURL,
      sectionsApiName,
      filters,
      populateDynamicZones(),
    )
    const req = await fetch(url)
    const response = await req.json()
    return dealSectionsResponse(response)
  } catch (err) {
    throw E_.RequestFailed(err)
  }
}

/**
 * Process the sections response from Strapi API
 */
const dealSectionsResponse = (
  response: StrapiSectionsResponse,
): SectionProps[] => {
  const sections = response.data
  return sections.length > 0
    ? sections.map((section) => {
        const components = section.attributes.components.map((component) =>
          adaptComponent(component),
        )
        const components1 = section.attributes.components1.map((component) =>
          adaptComponent(component),
        )
        const components2 = section.attributes.components2.map((component) =>
          adaptComponent(component),
        )
        const components3 = section.attributes.components3.map((component) =>
          adaptComponent(component),
        )
        return {
          id: section.id,
          type: section.attributes.type,
          ref: section.attributes.ref,
          styles: section.attributes.styles,
          className: section.attributes.className,
          components: components,
          components1: components1,
          components2: components2,
          components3: components3,
        }
      })
    : []
}
