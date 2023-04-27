import { useEffect } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import {
  Button,
  Col,
  Row,
  Icon,
  BulletList,
  getResponsiveCss,
  TextInput,
  useResponsiveMin,
} from '@aleph-front/aleph-core'
import Container from '@/components/Container'
import { IndexingImg } from '@/components/Imgs/IndexingImg'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import { DappImg } from '@/components/Imgs/DappImg'
import { IntheboxImg } from '@/components/Imgs/IntheboxImg'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import BlockTag from '@/components/BlockTag'
import Image from 'next/image'

const DappImgContainer = styled.div`
  ${getResponsiveCss(
    'md',
    css`
      position: absolute;
      bottom: 0;
      right: 0;
      height: auto;
      width: 52%;
      padding: 0;
    `,
  )}
`

const IntheboxImgContainer = styled.div`
  width: 174%;
  margin-left: -26%;
  margin-top: -12%;
  margin-bottom: -62%;
`

const SignMeUpButton = () => (
  <Button
    type="submit"
    value="Subscribe"
    name="subscribe"
    id="mc-embedded-subscribe"
    color="main0"
    kind="neon"
    size="big"
    variant="primary"
    tw="!block !mx-auto"
  >
    Sign me up!
  </Button>
)

const SignMeUpForm = () => {
  const isDesktop = useResponsiveMin('md')

  return (
    <form
      action="https://aleph.us17.list-manage.com/subscribe/post?u=40af570491d53f28c5ae6f1ab&amp;id=4850a3195f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      rel="noopener noreferrer"
      noValidate
    >
      <div tw="mb-4 w-full">
        <div
          style={{ position: 'absolute', left: '-4500px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_40af570491d53f28c5ae6f1ab_4850a3195f"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        {isDesktop ? (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
            buttonStyle="stuck"
            button={<SignMeUpButton />}
          />
        ) : (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
        )}
      </div>
      {!isDesktop && <SignMeUpButton />}
    </form>
  )
}

export default function Home() {
  const [ref1, handleScroll1] = useScrollTo()
  const [ref2, handleScroll2] = useScrollTo()
  const [ref3, handleScroll3] = useScrollTo()

  const { asPath } = useRouter()

  useEffect(() => {
    const [, hash] = asPath.split('#')

    switch (hash) {
      case 'solutions': {
        return handleScroll1()
      }
      case 'roadmap': {
        return handleScroll2()
      }
      case 'indexing': {
        return handleScroll3()
      }
    }
  }, [asPath, handleScroll1, handleScroll2, handleScroll3])

  return (
    <>
      <Head>
        <title>Aleph.im</title>
        <meta name="description" content="Aleph.im" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <section tw="px-0 py-12 md:py-36">
        <Container>
          <div tw="relative">
            <Row xs={1} md={6} gap="0">
              <Col xs={1} md={4}>
                <H1 className="tp-h5 md:tp-h2" tw="mb-6 md:mb-16">
                  Keep your dApp running smoothly, thanks to our reliable web3
                  cloud service
                </H1>
                <p className="tp-body1 fs-sm md:fs-xl" tw="md:w-7/12 md:mb-20">
                  Access trusted off-chain data or computation within a couple
                  lines of code
                </p>
                <DappImgContainer tw="py-12 md:py-0">
                  <DappImg />
                </DappImgContainer>
                <BulletList
                  size="big"
                  items={[
                    { kind: 'check', title: 'Blockchain Agnostic' },
                    { kind: 'check', title: 'Lightining Fast' },
                    { kind: 'check', title: 'Low cost' },
                    { kind: 'check', title: 'Trustless' },
                  ]}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="fx-noise-dark" tw="px-0 py-12" ref={ref1}>
        <Container>
          <div tw="mb-24">
            <div tw="md:flex md:flex-col md:items-center">
              <H1 tw="mb-4" className="tp-h4 md:tp-h3">
                Why use Aleph.im?
              </H1>
              <p className="tp-h7 text-base0" tw="mt-0 mb-6 ">
                Build DApps without any centralized components
              </p>
              <p className="md:fs-md" tw="m-0 md:w-3/6 md:text-center">
                Run your data storage and business logic on our unstoppable
                decentralized network. Instead of a centralized service susch as
                AWS or Google Cloud.
              </p>
            </div>
          </div>
          <Row xs={1} md={6} xsGap="1.5rem">
            <Col xs={1} md={2}>
              <div tw="md:flex md:flex-col md:items-center">
                <H2 tw="mb-12" type="h5">
                  Computing solutions
                </H2>
                <BlockTag
                  title="Private VM"
                  content="Confidential, private and encrypted virtual machine."
                />
                <BlockTag
                  title="24/7 VM"
                  content="Processes or functions that need to run seamless all the time."
                />
                <BlockTag
                  title="Functions"
                  content="Basicly, serverless computing at your fingertips (Lambda)."
                  tw="mb-0"
                />
              </div>
            </Col>
            <Col xs={1} md={2}>
              <div tw="py-20 px-7 md:py-8 md:px-0 2xl:px-8 flex flex-col items-center">
                <div tw="w-4/6 max-w-[380px] md:w-full mb-24">
                  <IntheboxImgContainer>
                    <IntheboxImg />
                  </IntheboxImgContainer>
                </div>
                <Button
                  color="main0"
                  kind="neon"
                  size="big"
                  variant="primary"
                  as="a"
                  target="_blank"
                  href="https://console.aleph.im"
                >
                  Launch Cloud dApp
                </Button>
                <Button
                  forwardedAs="a"
                  href="https://bit.ly/3GAAjii"
                  target="_blank"
                  kind="neon"
                  size="big"
                  variant="text-only"
                  color="main0"
                  tw="!block !mt-6"
                >
                  Get in touch with us{' '}
                  <Icon name="arrow-right" size="lg" tw="ml-2.5" />
                </Button>
              </div>
            </Col>
            <Col xs={1} md={2}>
              <div tw="md:flex md:flex-col md:items-center z-10">
                <H2 tw="mb-6" type="h5">
                  Storage solutions
                </H2>
                <p className="fs-md" tw="mt-0 mb-12 text-center md:w-4/6">
                  Combo core channel node storage resource node (SRN launch
                  Q3/2023)
                </p>
                <BlockTag
                  title="Immutable volumes"
                  content="Storing and sharing data in a distributed file system (IPFS)."
                />
                <BlockTag
                  title="File storage"
                  content="Private and encrypted for objects and files."
                  tw="mb-0"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="fx-noise-light"
        tw="px-0 pt-20 pb-10 md:pb-20"
        ref={ref3}
      >
        <Container>
          <Row xs={1} md={2} gap="1.5rem">
            <Col>
              <IndexingImg />
            </Col>
            <Col>
              <span className="tp-info" tw="mb-0">
                SOLANA - ETHEREUM - BINANCE SMART CHAIN
              </span>
              <H2 className="tp-h4 md:tp-h3">Indexing framework</H2>
              <p className="fs-md" tw="mt-0 mb-16">
                Consider using the Aleph Indexer Framework for indexing
                blockchain data. It&apos;s <strong>open-source</strong>,{' '}
                <strong>multi-chain</strong>, and provides an easy-to-use
                solution for building <strong>high-performance</strong>,{' '}
                <strong>decentralized indexers</strong> on{' '}
                <strong>Aleph.im&apos;s infrastructure</strong>.
              </p>
              <Button
                forwardedAs="a"
                href="https://bit.ly/3GAAjii"
                target="_blank"
                kind="neon"
                variant="primary"
                size="big"
                color="main0"
                tw="!my-6 md:!my-0"
              >
                Get in touch with us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section tw="px-0 py-20" ref={ref2}>
        <Container>
          <div tw="mb-16 md:flex md:flex-col md:items-center">
            <H1 tw="mb-4" type="h3" color="base0">
              Roadmap
            </H1>
            <p className="text-base0 tp-h7" tw="mt-0 mb-6 ">
              Charting the Course to a Decentralized Future
            </p>
            <p className="fs-md" tw="m-0 md:w-4/6 md:text-center">
              Discover the exciting future of aleph.im with our comprehensive
              roadmap. Explore the innovative features we have planned for 2023
              and 2024 to continue revolutionizing the decentralized cloud
              landscape.
            </p>
          </div>
          <Row xs={1} md={6} xsGap="2.5rem" mdGap="1.5rem">
            <Col xs={1} md={3}>
              <div tw="md:w-2/3 md:mx-auto">
                <H2 tw="mb-6 mx-auto" type="h3" color="base0">
                  2023
                </H2>
                <p className="fs-md" tw="mt-0 mb-12">
                  In 2023, aleph.im is focused on enhancing user experience,
                  scalability, and security. Our team is working to deliver
                  cutting-edge solutions that will empower businesses and
                  individuals to harness the full potential of decentralized
                  cloud technology.
                </p>
                <BulletList
                  size="regular"
                  items={[
                    {
                      kind: 'success',
                      title: 'EVM Chains Indexer',
                      text: 'BNB Chain',
                    },
                    {
                      kind: 'success',
                      title: "Launch VM's with a Transaction",
                      text: 'Ethereum, Tezos, Solana',
                    },
                    {
                      kind: 'warning',
                      title: 'Cloud Managed UI',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Migrate CNN to Postgres',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Secret Management in Virtual Machines',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Decentralized Network Health Status Page',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Storage Resource Nodes',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Oracle Indexer',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Docker Image Support',
                      text: 'In progress',
                    },
                    {
                      kind: 'warning',
                      title: 'Docker Image Support',
                      text: 'In progress',
                    },
                    {
                      kind: 'check',
                      title: 'Custom Domain Resolution on Load Balancers',
                    },
                    { kind: 'check', title: 'Decentralized Load Balancer' },
                    { kind: 'check', title: 'Reproducible Virtual Machines' },
                    { kind: 'check', title: 'IPFS on VM executors' },
                    { kind: 'check', title: '...' },
                  ]}
                />
              </div>
            </Col>
            <Col xs={1} md={3}>
              <div tw="md:w-2/3 md:mx-auto">
                <H2 tw="mb-6 mx-auto" type="h3" color="base0">
                  2024
                </H2>
                <p className="fs-md" tw="mt-0 mb-12">
                  As we move into 2024, our vision for aleph.im expands to
                  integrate next-generation technologies and drive industry-wide
                  adoption. Emphasising on interoperability, collaboration, and
                  sustainability, we are committed to paving the way for a truly
                  decentralized future.
                </p>
                <BulletList
                  size="regular"
                  items={[
                    { kind: 'check', title: 'Clustered Resource Nodes' },
                    {
                      kind: 'check',
                      title:
                        'GeoLocalisation for Storage and Compute Resource Nodes',
                    },
                    {
                      kind: 'check',
                      title: 'Decentralized Layer 7 Security',
                    },
                    { kind: 'check', title: 'Resources Marketplace' },
                    { kind: 'check', title: 'Decentralized Proxy / VPN' },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section tw="px-0 py-16">
        <Container>
          <div tw="flex flex-col items-center justify-center">
            <H1 color="base0" type="h3" tw="mb-4">
              Backed by
            </H1>
            <p className="fs-md" tw="mb-16 md:mb-6">
              Our dedicated backers and investors who believe in our mission and
              fuel our growth.
            </p>
            <div tw="flex items-center justify-center flex-wrap gap-16">
              <Image
                src="/b1.svg"
                alt="Stratos Technologies logo"
                width="221"
                height="49"
              />
              <Image
                src="/b2.svg"
                alt="Noia Capital logo"
                width="108"
                height="91"
              />
              <Image src="/b3.svg" alt="Ubisoft logo" width="103" height="81" />
              <Image src="/b4.svg" alt="Trgc logo" width="152" height="33" />
              <Image
                src="/b5.svg"
                alt="Bitfwd Capital logo"
                width="155"
                height="51"
              />

              <Image
                src="/b6.svg"
                alt="rarestone logo"
                width="162"
                height="27"
              />
              <Image
                src="/b7.svg"
                alt="Zee Prime Capital logo"
                width="74"
                height="76"
              />
              <Image
                src="/b8.svg"
                alt="Winkrypto logo"
                width="129"
                height="22"
              />
              <Image src="/b9.svg" alt="Nzvc logo" width="58" height="58" />
              <Image src="/b10.svg" alt="Th3ia logo" width="61" height="77" />
              <Image
                src="/b11.svg"
                alt="Incuba Alpha logo"
                width="84"
                height="48"
              />
              <Image
                src="/b12.svg"
                alt="Token Ventures logo"
                width="97"
                height="67"
              />
            </div>
          </div>
        </Container>
      </section>
      <section tw="px-0 py-16">
        <Container>
          <div tw="flex flex-col items-center justify-center">
            <H1 color="base0" type="h3" tw="mb-16 md:mb-6">
              Partners
            </H1>
            <div tw="flex items-center justify-center flex-wrap gap-16">
              <Image
                src="/p1.svg"
                alt="Noia Capital logo"
                width="104"
                height="81"
              />
              <Image
                src="/p2.svg"
                alt="Noia Capital logo"
                width="185"
                height="25"
              />
              <Image
                src="/p3.svg"
                alt="Noia Capital logo"
                width="144"
                height="26"
              />
              <Image
                src="/p4.svg"
                alt="Noia Capital logo"
                width="157"
                height="31"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="fx-glass-base0" tw="px-0 py-12 md:py-20">
        <Container>
          <div tw="md:flex md:justify-center">
            <div tw="md:inline-flex md:flex-col md:items-center">
              <H1 color="base0" type="h3" tw="mb-6">
                Get the latest updates
              </H1>
              <p className="fs-md text-base0" tw="mt-0 mb-4">
                Be the first to know about new launches
              </p>
              <SignMeUpForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
