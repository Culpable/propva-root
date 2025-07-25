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
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            PropVA eliminates guesswork through automated expense tracking and real-time investment property yields.
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
      <Container className="pb-20">
        <Heading as="h2" className="max-w-5xl">
          Know exactly which properties make money—instantly.
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
        {/* <p className="mt-8 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          That sinking feeling when you realise your 'great investment' is bleeding cash? Or wondering if refinancing Property 3 would actually improve returns? Without clear numbers, every decision feels like gambling.
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          PropVA shows net yields, cash-on-cash returns, and equity growth for every property the moment documents arrive. No manual calculations, no wondering. Just clarity. Make decisions with confidence, not spreadsheet-induced anxiety.
        </p> */}
        <p className="mt-8 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          That sinking feeling when you realise your ‘great investment’ might be draining your wallet.
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          Is that two-bedroom unit actually making you money, or just eating into your returns?
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          <strong>Without clear numbers, each decision feels like taking a shot in the dark.</strong>
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          PropVA gives you instant clarity. Track your net yields, lifetime ROI, and year-on-year income growth for every investment property in your portfolio.
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          No manual calculations, no wondering. Complete portfolio visibility.
        </p>
        <p className="mt-4 max-w-5xl text-xl/7 text-gray-700 sm:text-2xl/8">
          Make investment decisions with confidence and maximise your returns.
        </p>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>CLARITY</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Numbers, not hunches.
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
          eyebrow="UNIFIED"
          title="All properties, one dashboard"
          description="See every property's performance side-by-side. Compare yields, track expenses, monitor loans—your entire portfolio’s health visible at a glance."
          graphic={<LogoCluster />}
          className="lg:col-span-2 lg:rounded-bl-4xl rounded-bl-4xl max-lg:rounded-t-4xl lg:rounded-tl-4xl max-lg:rounded-br-4xl"
        />
        <BentoCard
          eyebrow="LOCALISED"
          title="Built for Australian investors"
          description="Financial year grouping, GST tracking, and tax-deductible expense flagging—designed for the Australian market."
          graphic={<Map />}
          className="lg:col-span-2 max-lg:rounded-4xl"
        />
        <BentoCard
          eyebrow="AUTOMATED"
          title="Upload. Confirm. Done."
          description="Upload a document, confirm the details, and watch your ROI, yields, and equity calculations update in real-time."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={["LeftCommand", "LeftShift", "V"]} />
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
        <Subheading dark>AUTOMATED INSIGHTS</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          {/* Geological analysis has never been easier */}
          Your AI-powered advantage.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          {/* lg:grid-rows-2 temporarily removed to eliminate extra spacing. Two bottom cards (Collaboration and Reporting) are temporarily hidden. */}
          <BentoCard
            dark
            eyebrow="TRANSPARENCY"
            title="Complete portfolio visibility"
            description="Monitor rental yields, expense ratios, profit margins, and overall performance across your investment property portfolio. Identify your top performers, with every number linked to supporting documents for complete transparency."
            graphic={
              // Original
              // <div className="h-80 bg-[url(/screenshots/chat.png)] bg-[size:851px_344px] bg-no-repeat" />
              // MS size
              // <div className="h-80 bg-[url(/screenshots/dashboard.png)] bg-cover bg-no-repeat" />
              <div className="h-96 bg-[url(/screenshots/dashboard.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={["top"]}
            fadeIntensity={0.05} // Very subtle shadow that won't interfere with property visibility
            // className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl" //! Bring this back when the two bottom cards are added back.
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl lg:rounded-bl-4xl max-lg:rounded-b-4xl"
          />
          <BentoCard
            dark
            eyebrow="INSTANT"
            title="AI automation that “just works”"
            description="Upload any receipt or statement—our AI reads, extracts, and categorises every figure automatically. No painful manual entry, no human error."
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
