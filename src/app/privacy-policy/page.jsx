import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  title: pageMetadata.privacyPolicy.title,
  description: pageMetadata.privacyPolicy.description,
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <h1 className="mt-8 font-display text-5xl font-medium tracking-tight text-gray-950 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">Last updated: October 18, 2025</p>

          {/* Call-out Box */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <LockClosedIcon className="h-6 w-6 text-gray-600" />
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-950">
                  We never sell or share anything you upload to PropVA with any third party—full stop.
                </p>
                <p className="text-base text-gray-700">
                  Your property information, financial records, contracts, statements, and all other uploaded content remain completely private. We use your data solely to provide <em>your</em> property analysis and enhance <em>your</em> app experience.
                </p>
              </div>
            </div>
          </div>
          {/* Interpretation and Definitions */}
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-gray-950">
            Interpretation and Definitions
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Interpretation
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            The words of which the initial letter is capitalised have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Definitions
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            For the purposes of this Privacy Policy:
          </p>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Account</strong> means a unique account created for You to access our Service or parts of our Service.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to PropVA, PO Box 155, Northlands PO 6905.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Country</strong> refers to: Western Australia, Australia
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Device</strong> means any device that can access the Service such as a computer, a mobile phone or a digital tablet.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Personal Data</strong> is any information that relates to an identified or identifiable individual.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Service</strong> refers to the Website.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analysing how the Service is used.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Website</strong> refers to PropVA, accessible from{' '}
                <a href="https://propva.com.au/" className="font-medium text-orange-700 underline hover:text-orange-900">
                  https://propva.com.au/
                </a>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </span>
            </li>
          </ul>

          {/* Collecting and Using Your Personal Data */}
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-950">
            Collecting and Using Your Personal Data
          </h2>
          
          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Types of Data Collected
          </h3>

          <h4 className="mt-8 text-xl font-semibold tracking-tight text-gray-950">
            Personal Data
          </h4>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="mt-4 space-y-2 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Email address</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>First name and last name</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Usage Data</span>
            </li>
          </ul>

          <h4 className="mt-8 text-xl font-semibold tracking-tight text-gray-950">
            Usage Data
          </h4>
          <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            </p>
            <p>
              We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
            </p>
          </div>
          <h4 className="mt-8 text-xl font-semibold tracking-tight text-gray-950">
            Tracking Technologies and Cookies
          </h4>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyse Our Service. The technologies We use may include:
          </p>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
              </span>
            </li>
          </ul>
          <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
            </p>
            <p>
              We use both Session and Persistent Cookies for the purposes set out below:
            </p>
          </div>
          <ul className="mt-4 space-y-6 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-gray-950">Necessary / Essential Cookies</strong>
                </p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-gray-950">Cookies Policy / Notice Acceptance Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-gray-950">Functionality Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
          </p>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Use of Your Personal Data
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">To provide and maintain our Service</strong>, including to monitor the usage of our Service.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">To contact You:</strong> To contact You by email or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">To manage Your requests:</strong> To attend and manage Your requests to Us.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="font-semibold text-gray-950">For improving your experience:</strong> We may use Your information for internal data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, understanding product usage, marketing, and to evaluate and improve our Service, products, and your overall experience.
              </span>
            </li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Retention of Your Personal Data
          </h3>
          <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </div>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Transfer of Your Personal Data
          </h3>
          <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>
          </div>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Disclosure of Your Personal Data
          </h3>
          <h4 className="mt-8 text-xl font-semibold tracking-tight text-gray-950">
            Law enforcement
          </h4>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </p>

          <h4 className="mt-8 text-xl font-semibold tracking-tight text-gray-950">
            Other legal requirements
          </h4>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="mt-4 space-y-2 text-lg leading-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Comply with a legal obligation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Protect and defend the rights or property of the Company</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Prevent or investigate possible wrongdoing in connection with the Service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Protect the personal safety of Users of the Service or the public</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Protect against legal liability</span>
            </li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
            Security of Your Personal Data
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
          </p>

          {/* Children's Privacy */}
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-950">
            Children's Privacy
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>
          </div>

          {/* Links to Other Websites */}
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-950">
            Links to Other Websites
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </div>

          {/* Changes to this Privacy Policy */}
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-950">
            Changes to this Privacy Policy
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          {/* Contact Us */}
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-950">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            If you have any questions about this Privacy Policy, You can contact us by visiting{' '}
            <a href="/contact" className="font-medium text-orange-700 underline hover:text-orange-900">
              our contact page
            </a>
            .
          </p>
        </div>
      </Container>
      
      <div className="my-32"></div>
      
      <Footer noCta={true} />
    </main>
  )
}
