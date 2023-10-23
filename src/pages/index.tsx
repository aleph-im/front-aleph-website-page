import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import BlockTag from '@/components/BlockTag'
import { useBasePath } from '@/hooks/useBasePath'

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

  const basePath = useBasePath()
  const imgPrefix = basePath?.charAt(0) === '/' ? basePath : ''

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
      </Head>
      <section tw="px-0 py-12 md:py-36">
        <Container>
          <div tw="relative">
            <Row xs={1} md={6} gap="0">
              <Col xs={1} md={4}>
                <H1 className="tp-h5 md:tp-h2" tw="mb-6 md:mb-16">
                  Keep your dApp running smoothly, thanks to our reliable web3
                  cloud solution
                </H1>
                <p className="tp-body1 fs-16 md:fs-28" tw="md:w-7/12 md:mb-20">
                  Access trusted off-chain data or computation within a couple
                  lines of code
                </p>
                <DappImgContainer tw="py-12 md:py-0">
                  <Image
                    src={`${imgPrefix}/img/dapp.svg`}
                    alt="DApp illustration"
                    fill={true}
                    tw="relative!"
                    priority={true}
                  />
                </DappImgContainer>
                <BulletList
                  size="big"
                  items={[
                    { kind: 'check', title: 'Blockchain Agnostic' },
                    { kind: 'check', title: 'Lightning Fast' },
                    { kind: 'check', title: 'Low cost' },
                    { kind: 'check', title: 'Trustless' },
                  ]}
                />
              </Col>
            </Row>
          </div>
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
              <Image
                src={`${imgPrefix}/img/ai.svg`}
                alt="AI illustration"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col>
              <span className="tp-info" tw="mb-0">
                EMPOWERING DECENTRALIZED AI WITH ALEPH.IM
              </span>
              <H2 className="tp-h4 md:tp-h3">
                Libertai.io harnessing aleph.im&apos;s power for decentralized
                AI
              </H2>
              <p className="fs-18" tw="mt-0 mb-16">
                Join us at the intersection of AI and decentralization.
                Libertai.io employs the strength of aleph.im&apos;s compute
                nodes, giving life to a{' '}
                <strong>fully decentralized, peer to peer AI</strong>. This
                synergy allows for <strong>efficient computations</strong> while
                ensuring <strong>data privacy</strong> and{' '}
                <strong>system resilience</strong>.
              </p>
              <Button
                forwardedAs="a"
                href="https://libertai.io/"
                target="_blank"
                kind="neon"
                variant="primary"
                size="big"
                color="main0"
                tw="!my-0"
              >
                Explore the future of AI
              </Button>
            </Col>
          </Row>
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
              <p className="md:fs-18" tw="m-0 md:w-3/6 md:text-center">
                Run your data storage and business logic on our unstoppable
                decentralized network. Instead of a centralized service such as
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
                    <Image
                      src={`${imgPrefix}/img/inthebox.svg`}
                      alt="In the box illustration"
                      fill={true}
                      tw="relative!"
                    />
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
                <p className="fs-18" tw="mt-0 mb-12 text-center md:w-4/6">
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
              <Image
                src={`${imgPrefix}/img/indexing.svg`}
                alt="Indexing illustration"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col>
              <span className="tp-info" tw="mb-0">
                SOLANA - ETHEREUM - BNB SMART CHAIN
              </span>
              <H2 className="tp-h4 md:tp-h3">Indexing framework</H2>
              <p className="fs-18" tw="mt-0 mb-16">
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
                tw="!my-0"
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
            <p className="fs-18" tw="m-0 md:w-4/6 md:text-center">
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
                <p className="fs-18" tw="mt-0 mb-12">
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
                      kind: 'success',
                      title: 'Cloud Managed UI',
                    },
                    {
                      kind: 'success',
                      title: 'Migrate CCN to Postgres',
                    },
                    {
                      kind: 'warning',
                      title: 'GPU support',
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
                      title: 'Docker img Support',
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
                <p className="fs-18" tw="mt-0 mb-12">
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
            <p className="fs-18" tw="mb-16 md:mb-6">
              Our dedicated backers and investors who believe in our mission and
              fuel our growth.
            </p>
            <div tw="flex items-center justify-center flex-wrap gap-16">
              <Image
                src={`${imgPrefix}/img/backed/b1.svg`}
                width={221}
                height={49}
                alt="Stratos Technologies"
              />
              <Image
                src={`${imgPrefix}/img/backed/b2.svg`}
                width={108}
                height={91}
                alt="Noia Capital"
              />
              <Image
                src={`${imgPrefix}/img/backed/b3.svg`}
                width={103}
                height={81}
                alt="Ubisoft"
              />
              <Image
                src={`${imgPrefix}/img/backed/b4.svg`}
                width={152}
                height={33}
                alt="TRGC"
              />
              <Image
                src={`${imgPrefix}/img/backed/b5.svg`}
                width={155}
                height={51}
                alt="Bitfwd Capital"
              />
              <Image
                src={`${imgPrefix}/img/backed/b6.svg`}
                width={162}
                height={27}
                alt="Rarestone"
              />
              <Image
                src={`${imgPrefix}/img/backed/b7.svg`}
                width={74}
                height={76}
                alt="Zee Prime Capital"
              />
              <Image
                src={`${imgPrefix}/img/backed/b8.svg`}
                width={129}
                height={22}
                alt="Winkrypto"
              />
              <Image
                src={`${imgPrefix}/img/backed/b9.svg`}
                width={58}
                height={58}
                alt="NZVC"
              />
              <Image
                src={`${imgPrefix}/img/backed/b10.svg`}
                width={61}
                height={77}
                alt="Th3ia"
              />
              <Image
                src={`${imgPrefix}/img/backed/b11.svg`}
                width={84}
                height={48}
                alt="Incuba Alpha"
              />
              <Image
                src={`${imgPrefix}/img/backed/b12.svg`}
                width={97}
                height={67}
                alt="Token Ventures"
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
                src={`${imgPrefix}/img/partner/p1.svg`}
                width={104}
                height={81}
                alt="Ubisoft"
              />
              <Image
                src={`${imgPrefix}/img/partner/p2.svg`}
                width={185}
                height={25}
                alt="Synaps"
              />
              <Image
                src={`${imgPrefix}/img/partner/p3.svg`}
                width={144}
                height={26}
                alt="Anima"
              />
              <Image
                src={`${imgPrefix}/img/partner/p4.svg`}
                width={157}
                height={31}
                alt="Request"
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
              <p className="fs-18 text-base0" tw="mt-0 mb-4">
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
