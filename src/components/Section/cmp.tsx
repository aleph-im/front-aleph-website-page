import React from 'react'
import { SectionProps, SectionType } from './types'
import ComponentManager from '@/components/ComponentManager'
import Container from '@/components/Container'
import { Col, Row } from '@aleph-front/aleph-core'

export const Section = ({ type, ...rest }: SectionProps) => {
  return (
    <>
      {(() => {
        switch (type) {
          case SectionType.main:
            return <SectionMain type={type} {...rest} />
          case SectionType.main12:
            return <SectionMain12 type={type} {...rest} />
          case SectionType.main13:
            return <SectionMain13 type={type} {...rest} />
          case SectionType.only11:
            return <SectionOnly11 type={type} {...rest} />
          case SectionType.only12:
            return <SectionOnly12 type={type} {...rest} />
          default:
            return null
        }
      })()}
    </>
  )
}

export const SectionMain = ({ components, styles, ...rest }: SectionProps) => {
  return (
    <section css={styles} {...rest}>
      <Container>
        <div tw="flex flex-col items-center justify-center">
          <ComponentManager components={components} />
        </div>
      </Container>
    </section>
  )
}

export const SectionMain12 = ({
  components,
  components1,
  components2,
  styles,
  ...rest
}: SectionProps) => {
  return (
    <section css={styles} {...rest}>
      <Container>
        <div tw="mb-16 md:flex md:flex-col md:items-center">
          <ComponentManager components={components} />
        </div>
        <Row xs={1} md={6} xsGap="2.5rem" mdGap="1.5rem">
          <Col xs={1} md={3}>
            <div tw="md:w-2/3 md:mx-auto">
              <ComponentManager components={components1} />
            </div>
          </Col>
          <Col xs={1} md={3}>
            <div tw="md:w-2/3 md:mx-auto">
              <ComponentManager components={components2} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export const SectionMain13 = ({
  components,
  components1,
  components2,
  components3,
  styles,
  ...rest
}: SectionProps) => {
  return (
    <section css={styles} {...rest}>
      <Container>
        <div tw="mb-24">
          <div tw="md:flex md:flex-col md:items-center">
            <ComponentManager components={components} />
          </div>
        </div>
        <Row xs={1} md={6} xsGap="1.5rem">
          <Col xs={1} md={2}>
            <div tw="md:flex md:flex-col md:items-center">
              <ComponentManager components={components1} />
            </div>
          </Col>
          <Col xs={1} md={2}>
            <div tw="py-20 px-7 md:py-8 md:px-0 2xl:px-8 flex flex-col items-center">
              <ComponentManager components={components2} />
            </div>
          </Col>
          <Col xs={1} md={2}>
            <div tw="md:flex md:flex-col md:items-center z-10">
              <ComponentManager components={components3} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export const SectionOnly11 = ({
  components1,
  styles,
  ...rest
}: SectionProps) => {
  return (
    <section css={styles} {...rest}>
      <Container>
        <div tw="relative">
          <Row xs={1} md={6} gap="0">
            <Col xs={1} md={4}>
              <ComponentManager components={components1} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export const SectionOnly12 = ({
  components1,
  components2,
  styles,
  ...rest
}: SectionProps) => {
  return (
    <section css={styles} {...rest}>
      <Container>
        <Row xs={1} md={2} gap="1.5rem">
          <Col>
            <ComponentManager components={components1} />
          </Col>
          <Col>
            <ComponentManager components={components2} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section
