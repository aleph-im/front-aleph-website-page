import React from 'react'
import { PageProps } from './types'
import Section from '@/components/Section'
import Head from 'next/head'

export const Page = ({ sections = [] }: PageProps) => {
  console.log('sections', sections)
  return (
    <>
      <Head>
        <title>Aleph.im</title>
        <meta name="description" content="Aleph.im" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {sections
        ? sections.map((section, i) => <Section key={i} {...section} />)
        : null}
    </>
  )
}

export default Page
