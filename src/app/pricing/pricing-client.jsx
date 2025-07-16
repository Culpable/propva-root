'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/16/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const tier = {
  name: 'Professional',
  description: 'Complete property portfolio management for serious investors.',
  priceMonthly: 19,
  currency: 'AUD',
  href: 'https://app.propva.com.au/',
  highlights: [
    { description: 'Automated document extraction powered by AI' },
    { description: 'Intelligent expense categorisation & deductions' },
    { description: 'Real-time ROI, yield & equity calculations' },
    { description: 'Financial year reporting & tax summaries' },
    { description: 'Track up to 5 properties' },
    { description: 'Multi-property comparative analysis' },
    { description: 'Multi-owner percentage splits' },
    { description: 'Accountant-ready PDF & CSV exports' },
    { description: 'Insurance expiry reminders' },
    { description: 'Loan interest & principal tracking' },
    { description: 'Custom depreciation schedules' },
    { description: 'Priority support' },
  ],
  features: [
    { section: 'Properties', name: 'Properties tracked', value: 'Unlimited' },
    { section: 'Properties', name: 'Document uploads/month', value: 'Unlimited' },
    { section: 'Properties', name: 'Multiple portfolios', value: true },
    { section: 'Financial', name: 'ROI & yield tracking', value: true },
    { section: 'Financial', name: 'Expense categorisation', value: 'Automatic + Custom rules' },
    { section: 'Financial', name: 'Tax deduction flagging', value: true },
    { section: 'Financial', name: 'Multi-property analysis', value: true },
    { section: 'Reporting', name: 'Financial year summaries', value: true },
    { section: 'Reporting', name: 'CSV export', value: true },
    { section: 'Reporting', name: 'Accountant-ready PDFs', value: true },
    { section: 'Reporting', name: 'Custom report builder', value: true },
    { section: 'Support', name: 'Email support', value: true },
    { section: 'Support', name: 'Priority support', value: true },
    { section: 'Support', name: 'Onboarding assistance', value: true },
  ],
}

function Header() {
  return (
    <Container className="mt-16">
      <Subheading className="text-center">Simple, transparent pricing</Subheading>
      <Heading as="h1" className="text-center mt-2">One plan. Everything included.</Heading>
      <Lead className="mt-6 max-w-3xl mx-auto text-center">
        Transform your property investment chaos into crystal-clear financial intelligence. 
        Start with our 7-day free trial—no credit card required.
      </Lead>
    </Container>
  )
}

function HeroPricingCard() {
  return (
    <div className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-gray-50 to-white" />
        <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      </div>
      
      <Container className="relative">
        {/* Single centered pricing card */}
        <div className="mx-auto max-w-2xl">
          <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                {/* Price section */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-6xl font-bold text-gray-950">
                      ${tier.priceMonthly}
                    </div>
                    <div className="text-sm/5 text-gray-950/75 text-left">
                      <p>AUD/user</p>
                      <p>per month</p>
                      <p className="text-xs">(inc. GST)</p>
                    </div>
                  </div>
                  <p className="mt-6 text-lg text-gray-950/75">{tier.description}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                  <Button href={tier.href} className="px-8">
                    Start Your Free Trial
                  </Button>
                </div>

                {/* Features list - 2 columns on desktop */}
                <div className="mt-12">
                  <h3 className="text-sm/6 font-semibold text-gray-950 text-center mb-6">
                    Everything you need to manage your portfolio:
                  </h3>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
                    {tier.highlights.map((props, featureIndex) => (
                      <FeatureItem key={featureIndex} {...props} />
                    ))}
                  </ul>
                </div>

                {/* Trust badges */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-600">
                      Join 1,000+ property investors across Australia
                    </p>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-950">$2.3B+</p>
                        <p className="text-sm text-gray-600">Properties tracked</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-950">50K+</p>
                        <p className="text-sm text-gray-600">Documents processed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-950">99.9%</p>
                        <p className="text-sm text-gray-600">Uptime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-3 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon className="size-5 shrink-0 fill-green-600" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['\22'] after:absolute after:content-['\22'] lg:text-4xl">
                  PropVA transformed my chaotic filing system into instant clarity. I now know exactly which properties perform best and can make confident investment decisions in minutes, not days.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Sarah Thompson</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                    Property Investor, 12 Properties
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  const faqs = [
    {
      question: 'Can I change the number of properties I track?',
      answer: 'Absolutely! With PropVA you can track unlimited properties. Add or remove properties anytime through your dashboard—your historical data is always preserved.'
    },
    {
      question: 'What measures are in place to ensure the security of our data?',
      answer: 'Your financial data is protected with bank-level encryption and stored in Australian data centres. We maintain SOC 2 compliance and never share your data with third parties. Every document and calculation is tied to your account with full audit trails.'
    },
    {
      question: 'Can I access PropVA on my phone?',
      answer: 'Yes, PropVA works seamlessly across all devices. Upload documents from your phone camera, check property performance on your tablet, or dive into detailed reports on your desktop—your data syncs instantly across all platforms.'
    },
    {
      question: 'How does PropVA handle tax deductions?',
      answer: 'PropVA automatically flags tax-deductible expenses based on ATO guidelines and categorises them by property. At tax time, export a complete summary with all deductions itemised and linked to source documents—your accountant will love you.'
    },
    {
      question: 'How quickly does the AI process documents?',
      answer: 'Most documents are processed within seconds. Simply drag and drop a rent statement, loan document, or invoice—our AI extracts the data, links it to the right property, and updates your dashboards instantly. You\'ll see a live progress bar showing exactly what\'s happening.'
    },
    {
      question: 'What if I need help getting started?',
      answer: 'We\'re here to help! Every PropVA account includes onboarding assistance to get you set up quickly. Plus, you\'ll have access to priority support via email, comprehensive documentation, and video tutorials to make the most of your investment tracking.'
    }
  ]

  return (
    <Container>
      <section id="faqs" className="scroll-mt-8 py-24">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between px-6 py-6 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition-colors">
                      <span className="text-lg font-semibold text-gray-900 pr-6">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-6 pt-4">
                      <p className="text-base/6 text-gray-600">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

function PricingContent() {
  return (
    <>
      <Header />
      <HeroPricingCard />
      <Testimonial />
      <FrequentlyAskedQuestions />
    </>
  )
}

export function PricingClient() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <PricingContent />
      <Footer />
    </main>
  )
} 