import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { ContactForm } from './contact-form'
import { ContactDetails } from './contact-details'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Subheading>Contact Us</Subheading>
        <Heading>Simplify your property portfolio.</Heading>
        <Lead className="mt-6 max-w-3xl">
          See through the paperwork to your real returns. Discover how PropVA streamlines your investment property portfolio.
        </Lead>

        <div className="mt-8 lg:mt-24 grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      
      <div className="my-32"></div>
      
      <Footer noCta={true} />
    </main>
  )
} 
