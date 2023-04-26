import { useEffect } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import { Button, Col, Row, Icon, addClasses, BulletList, getResponsiveCss, TextInput } from '@aleph-front/aleph-core'
import Container from '@/components/Container'
import { IndexingImg } from '@/components/Imgs/IndexingImg'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import { DappImg } from '@/components/Imgs/DappImg'
import { IntheboxImg } from '@/components/Imgs/IntheboxImg'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import BlockTag from '@/components/BlockTag'

const StyledSection = styled.section.attrs(addClasses('p-0'))``

const DappImgContainer = styled.div`
  ${getResponsiveCss('md', css`
    position: absolute;
    bottom: 0;
    right: 0;
    height: auto;
    width: 50%;
    padding: 0;
  `)}
`

export default function Home() {
  const [ref1, handleScroll1] = useScrollTo()
  const [ref2, handleScroll2] = useScrollTo()
  const [ref3, handleScroll3] = useScrollTo()

  const { asPath } = useRouter()

  useEffect(() => {
    const [, hash] = asPath.split('#');
    console.log(hash)

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
      <main>
        <StyledSection tw='py-12 md:py-36'>
          <Container>
            <div tw='relative'>
              <Row xs={1} md={6} gap="0">
                <Col xs={1} md={4}>
                  <H1 className='tp-h5 md:tp-h2' tw='mb-6 md:mb-16'>Keep your dApp running smoothly, thanks to our reliable web3 cloud service</H1>
                  <p className='tp-body1 fs-sm md:fs-xl' tw='m-0 md:mr-80'>Access trusted off-chain data or computation within a couple lines of code</p>
                  <DappImgContainer tw='py-12'><DappImg /></DappImgContainer>
                  <BulletList size='big' items={[
                    { kind: 'check', title: 'Blockchain Agnostic' },
                    { kind: 'check', title: 'Lightining Fast' },
                    { kind: 'check', title: 'Low cost' },
                    { kind: 'check', title: 'Trustless' },
                  ]} />
                </Col>
              </Row>
            </div>
          </Container>
        </StyledSection>
        <StyledSection className='fx-noise-dark' tw="py-12" ref={ref1}>
          <Container>
            <div tw='mb-24'>
              <H1 tw='mb-4' type="h4">Why use Aleph.im?</H1>
              <p className="tp-h7 text-base0" tw='mt-0 mb-6'>Build DApps without any centralized components</p>
              <p tw="m-0">Run your data storage and business logic on our unstoppable decentralized network. Instead of a centralized service susch as AWS or Google Cloud.</p>
            </div>
            <Row xs={1} md={6} xsGap="1.5rem" mdGap="0">
              <Col xs={1} md={2}>
                <H2 tw="mb-12" type="h5">Computing solutions</H2>
                <BlockTag title='Private VM' content='Confidential, private and encrypted virtual machine.' />
                <BlockTag title='24/7 VM' content='Processes or functions that need to run seamless all the time.' />
                <BlockTag title='Functions' content='Basicly, serverless computing at your fingertips (Lambda).' tw="mb-0" />
              </Col>
              <Col xs={1} md={2}>
                <div tw='py-20'>
                  <div tw='-mb-12 ml-8'><IntheboxImg /></div>
                  <div tw='flex flex-col items-center'>
                    <Button color='main0' kind='neon' size='big' variant='primary'>Launch Cloud dApp</Button>
                    <Button forwardedAs="a" href="https://bit.ly/3GAAjii" target="_blank" kind='neon' size='big' variant='text-only' color='main0' tw='block mt-6'>Get in touch with us <Icon name='arrow-right' size='lg' tw='ml-2.5' /></Button>
                  </div>
                </div>
              </Col>
              <Col xs={1} md={2}>
                <H2 tw="mb-6" type="h5">Storage solutions</H2>
                <p className='fs-md' tw="mt-0 mb-12 text-center">Combo core channel node storage resource node (SRN launch Q3/2023)</p>
                <BlockTag title='Immutable volumes' content='Storing and sharing data in a distributed file system (IPFS).' />
                <BlockTag title='File storage' content='Private and encrypted for objects and files.' tw="mb-0" />
              </Col>
            </Row>
          </Container>
        </StyledSection>
        <StyledSection className='fx-noise-light' tw="pt-20 pb-10" ref={ref3}>
          <Container>
            <Row xs={1} md={2} gap="1.5rem">
              <Col><IndexingImg /></Col>
              <Col>
                <span className="tp-info" tw="mb-0">SOLANA - ETHEREUM - BINANCE SMART CHAIN</span>
                <H2 type='h4' >Indexing framework</H2>
                <p className='fs-md' tw="mt-0 mb-16">Consider using the Aleph Indexer Framework for indexing blockchain data. It&apos;s <strong>open-source</strong>, <strong>multi-chain</strong>, and provides an easy-to-use solution for building <strong>high-performance</strong>, <strong>decentralized indexers</strong> on <strong>Aleph.im&apos;s infrastructure</strong>.</p>
                <Button forwardedAs='a' href="https://bit.ly/3GAAjii" target="_blank" kind='neon' variant='primary' size='big' color='main0' tw='my-6'>Get in touch with us</Button>
              </Col>
            </Row>
          </Container>
        </StyledSection>
        <StyledSection tw='py-20' ref={ref2}>
          <Container>
            <div tw='mb-16'>
              <H1 tw='mb-4' type="h3" color='base0'>Roadmap</H1>
              <p className='text-base0 tp-h7' tw='mt-0 mb-6 '>Charting the Course to a Decentralized Future</p>
              <p className='fs-md' tw='m-0'>Discover the exciting future of aleph.im with our comprehensive roadmap. Explore the innovative features we have planned for 2023 and 2024 to continue revolutionizing the decentralized cloud landscape.</p>
            </div>
            <Row xs={1} md={6} xsGap="2.5rem" mdGap="0">
              <Col xs={1} md={3}>
                <div tw='flex justify-center'>
                  <H2 tw='mb-6' type="h3" color='base0'>2023</H2>
                </div>
                <p className='fs-md' tw='mt-0 mb-12'>In 2023, aleph.im is focused on enhancing user experience, scalability, and security. Our team is working to deliver cutting-edge solutions that will empower businesses and individuals to harness the full potential of decentralized cloud technology.</p>
                <BulletList size='regular' items={[
                  { kind: 'success', title: 'EVM Chains Indexer', text: 'BNB Chain' },
                  { kind: 'success', title: 'Launch VM\'s with a Transaction', text: 'Ethereum, Tezos, Solana' },
                  { kind: 'warning', title: 'Cloud Managed UI', text: 'In progress' },
                  { kind: 'warning', title: 'Migrate CNN to Postgres', text: 'In progress' },
                  { kind: 'warning', title: 'Secret Management in Virtual Machines', text: 'In progress' },
                  { kind: 'warning', title: 'Decentralized Network Health Status Page', text: 'In progress' },
                  { kind: 'warning', title: 'Storage Resource Nodes', text: 'In progress' },
                  { kind: 'warning', title: 'Oracle Indexer', text: 'In progress' },
                  { kind: 'warning', title: 'Docker Image Support', text: 'In progress' },
                  { kind: 'warning', title: 'Docker Image Support', text: 'In progress' },
                  { kind: 'check', title: 'Custom Domain Resolution on Load Balancers' },
                  { kind: 'check', title: 'Decentralized Load Balancer' },
                  { kind: 'check', title: 'Reproducible Virtual Machines' },
                  { kind: 'check', title: 'IPFS on VM executors' },
                  { kind: 'check', title: '...' },
                ]} />
              </Col>
              <Col xs={1} md={3}>
                <div tw='flex justify-center'>
                  <H2 tw='mb-6' type="h3" color='base0'>2024</H2>
                </div>
                <p className='fs-md' tw='mt-0 mb-12'>As we move into 2024, our vision for aleph.im expands to integrate next-generation technologies and drive industry-wide adoption. Emphasising on interoperability, collaboration, and sustainability, we are committed to paving the way for a truly decentralized future.</p>
                <BulletList size='regular' items={[
                  { kind: 'check', title: 'Clustered Resource Nodes' },
                  { kind: 'check', title: 'GeoLocalisation for Storage and Compute Resource Nodes' },
                  { kind: 'check', title: 'Decentralized Layer 7 Security' },
                  { kind: 'check', title: 'Resources Marketplace' },
                  { kind: 'check', title: 'Decentralized Proxy / VPN' },
                ]} />
              </Col>
            </Row>
          </Container>
        </StyledSection>
        <StyledSection tw='p-16'>
          <Container>
            <div tw='flex flex-col items-center justify-center'>
              <H1 color='base0' type='h3' tw='mb-4'>Backed by</H1>
              <p className='fs-md' tw="m-0">Our dedicated backers and investors who believe in our mission and fuel our growth.</p>
              <div tw='flex flex-wrap'></div>
            </div>
          </Container>
        </StyledSection>
        <StyledSection tw='p-16'>
          <Container>
            <div tw='flex flex-col items-center justify-center'>
              <H1 color='base0' type='h3' tw='mb-4'>Partners</H1>
              <div tw='flex flex-wrap'></div>
            </div>
          </Container>
        </StyledSection>
        <StyledSection tw='py-12'>
          <Container>
            <div tw='md:flex justify-center'>
              <div tw='md:inline-flex flex-col items-center'>
                <H1 color='base0' type='h3' tw='mb-6'>Get the latest updates</H1>
                <p className='fs-md text-base0' tw='mt-0 mb-4'>Be the first to know about new launches</p>
                <div tw='mb-4 w-full'>
                  <TextInput name="email" placeholder='email address' />
                </div>
                <div tw='flex justify-center'>
                  <Button color='main0' kind='neon' size='big' variant='primary'>Sign me up!</Button>
                </div>
              </div>
            </div>
          </Container>
        </StyledSection>
      </main>
    </>
  )
}
