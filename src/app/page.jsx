import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Script from 'next/script'
import { organizationSchema } from '@/schemas/organization-schema'
import { siteMetadata } from '@/lib/metadata'

export const metadata = {
  description:
    "Turn property documents into financial intelligence. Propva uses AI to extract data from statements, calculate ROI, yields & tax for Australian investors.",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Propva: Simplify Your Property Investment Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: siteMetadata.twitter.cardType,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          {/* <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            AI-powered exploration.
          </h1> */}
          <h1 className="font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            Portfolio clarity.
          </h1>
          {/* <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-xl/8 lg:text-[1.45rem]/[1.875rem]">
            Accelerate your path from data to discovery with Mine Seek's AI-powered exploration agents.
          </p> */}
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            PropVA turns document chaos into crystal-clear financial intelligence for Australian property investors.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.propva.com.au/">Login</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-5xl">
          Property performance at your fingertips.
        </Heading>
        {/* <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        /> */}
        {/* Version 1 */}
        {/* <p className="mt-8 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          Unify all your exploration data into a single cohesive platform. Mine Seek's AI agents seamlessly integrate with WAMEX, OSDU, and any custom information sources your team depends on, bringing everything together into one intuitive interface.
        </p> */}
        {/* Version 2 */}
        <p className="mt-8 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          See ROI, yields, and equity growth for every property in your portfolio—instantly updated as documents arrive.
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          Drag-and-drop any statement or invoice. Our AI extracts the data, links it to the right property, and updates your dashboards—no spreadsheets required.
        </p>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Portfolio Management</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Simple, intuitive, fast.
      </Heading>
      {/* TO DO: When adding back the old cards, return to the grid-rows-2 to the div below and remove the  top left/right rounded corners from bottom cards. */}
      {/* <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"> */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
        {/*! Temporary comment out the top two cards for now. Need to edit the design to fit the new cards. */}
        {/* <BentoCard
          eyebrow="Insight"
          title="Perfect clarity from complex data"
          description="Mine Seek's AI agents process vast amounts of geological data to surface key insights. Understand mineral deposits, structural patterns, and exploration opportunities with unprecedented clarity."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Advanced pattern recognition"
          description="Our AI identifies subtle geological patterns and correlations across multiple data sources that traditional methods might miss."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        /> */}
        <BentoCard
          eyebrow="Integration"
          title="All documents, one dashboard"
          description="Connect rent statements, loan documents, council rates—everything syncs to the right property automatically."
          graphic={<LogoCluster />}
          className="lg:col-span-2 lg:rounded-bl-4xl rounded-bl-4xl max-lg:rounded-t-4xl lg:rounded-tl-4xl max-lg:rounded-br-4xl"
        />
        <BentoCard
          eyebrow="AUSTRALIAN"
          title="Built for Australian investors"
          description="Financial year grouping, GST tracking, and tax-deductible expense flagging—designed for the Australian market."
          graphic={<Map />}
          className="lg:col-span-2 max-lg:rounded-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Instant financial clarity"
          description="Upload a document, confirm the details, and watch your ROI, yields, and equity calculations update in real-time."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={["LeftCommand", "LeftShift", "D"]} />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl lg:rounded-tr-4xl max-lg:rounded-t-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Analysis</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          {/* Geological analysis has never been easier */}
          Your financial command centre.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          {/* lg:grid-rows-2 temporarily removed to eliminate extra spacing. Two bottom cards (Collaboration and Reporting) are temporarily hidden. */}
          <BentoCard
            dark
            eyebrow="Performance Tracking"
            title="Every metric that matters"
            description="Track net yields, cash-on-cash returns, capital growth, and loan-to-value ratios. See which properties perform best and why, with every figure linked back to source documents."
            graphic={
              // Original
              // <div className="h-80 bg-[url(/screenshots/chat.png)] bg-[size:851px_344px] bg-no-repeat" />
              <div className="h-80 bg-[url(/screenshots/chat.png)] bg-cover bg-no-repeat" />
            }
            fade={["top"]}
            fadeIntensity={0.3} // Reduce to 30% intensity
            // className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl" //! Bring this back when the two bottom cards are added back.
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl lg:rounded-bl-4xl max-lg:rounded-b-4xl"
          />
          <BentoCard
            dark
            eyebrow="Tax-Ready"
            title="Accountant-friendly exports"
            description="Generate financial year summaries with categorised expenses, depreciation schedules, and CGT calculations—ready for your tax return."
            graphic={<LogoTimeline />}
            // className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl" //! Bring this back when the two bottom cards are added back.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl lg:rounded-br-4xl max-lg:rounded-t-4xl max-lg:rounded-b-4xl"
          />
          {/* <BentoCard
            dark
            eyebrow="Collaboration"
            title="Team collaboration"
            description="Share insights and collaborate effectively with your exploration team in real-time."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Reporting"
            title="Comprehensive reporting"
            description="Generate detailed geological reports and visualisations automatically, saving your team valuable time."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={["top"]}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          /> */}
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="referral-tracking"
        src="/scripts/referral-tracking.js"
        strategy="afterInteractive"
      />
      <Hero />
      <main>
        {/* Commented out logo cloud for now */}
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {/* Commented out testimonials for now. */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
