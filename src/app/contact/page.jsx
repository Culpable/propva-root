import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { ContactForm } from './contact-form'
import { ContactDetails } from './contact-details'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Contact Us',
  description: 'Ready to simplify your property portfolio management? Contact us to see how Propva turns document chaos into financial clarity.',
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
        <Heading>Simplify your portfolio today.</Heading>
        <Lead className="mt-6 max-w-3xl">
          Ready to transform document chaos into crystal-clear financial intelligence? Let's discuss how PropVA can help you manage your property portfolio with confidence.
        </Lead>

        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      
      <div className="my-32"></div>
      
      <Footer noCta={true} />
    </main>
  )
} 