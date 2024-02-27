import React from 'react'
import Head from 'next/head'
import AutoBreadcrumb from '@/components/AutoBreadcrumb/cmp'
import Container from '@/components/Container/cmp'
import H1 from '@/components/H1/cmp'
import H2 from '@/components/H2/cmp'
import { Col, Row } from '@aleph-front/core'

export default function LegalMentions() {
  return (
    <>
      <Head>
        <title>Aleph.im | Legal Mentions</title>
        <meta name="description" content="Aleph.im legal mentions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section tw="px-0 pt-20 pb-0">
        <Container>
          <AutoBreadcrumb name="Legal" />
          <H1 className="tp-h3 md:tp-h1 xl:tp-header" tw="m-0">
            Legal mentions
          </H1>
        </Container>
      </section>
      <section tw="px-0 py-16">
        <Container>
          <Row xs={1} md={4}>
            <Col xs={1} md={2} mdOffset={2}>
              <div tw="flex flex-col gap-16">
                <div>
                  <H2 type="h7" color="base0" tw="mb-6">
                    Company
                  </H2>
                  <p className="fs-18">
                    Aleph.im SASU <br />
                    242 Boulevard Voltaire <br />
                    75011 Paris <br />
                    France
                  </p>
                  <p className="tp-body1 fs-10">
                    The company is listed on the Paris Companies Register under
                    the following number 882 412 869 RCS Paris (Code APE 6202 A
                    - Conseil en systèmes et logiciels informatiques)
                  </p>
                </div>
                <div>
                  <H2 type="h7" color="base0" tw="mb-6">
                    Responsible publisher
                  </H2>
                  <p className="fs-18">
                    242 Boulevard Voltaire <br />
                    75011 Paris <br />
                    France <br />
                  </p>
                </div>
                <div>
                  <H2 type="h7" color="base0" tw="mb-6">
                    Web hosting
                  </H2>
                  <p className="fs-18">
                    SCALEWAY SAS <br />
                    BP 438 <br />
                    75366 PARIS <br />
                    CEDEX 08 <br />
                    FRANCE <br />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
