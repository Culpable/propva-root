import { clsx } from 'clsx'
import { Mark } from './logo'

function Row({ children }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({ label, src, className }) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid grid-cols-[1rem,1fr] items-center gap-2 whitespace-nowrap px-3 py-1',
        'rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-inset ring-white/10',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      <img alt="" src={src} className="size-4 object-contain" />
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-xl bg-gradient-to-t from-white/5 to-white/25 shadow outline outline-offset-[-5px] outline-white/5 ring-1 ring-inset ring-white/10">
          {/* Original code commented out */}
          {/* <Mark className="h-9 fill-white" /> */}
          
          {/* Using the actual Mine Seek logo */}
          <Mark className="h-16 w-auto" />
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-1 pt-8 [container-type:inline-size]">
        <Row>
          {/* Original logos commented out */}
          {/* <Logo
            label="Loom"
            src="/logo-timeline/loom.svg"
            className="[animation-delay:-26s] [animation-duration:30s]"
          /> */}
          <Logo
            label="Rental statements"
            src="/logo-timeline/rent.svg"
            className="[animation-delay:-20s] [animation-duration:30s]"
          />
          {/* <Logo
            label="Gmail"
            src="/logo-timeline/gmail.svg"
            className="[animation-delay:-8s] [animation-duration:30s]"
          /> */}
          <Logo
            label="Insurance premiums"
            src="/logo-timeline/insurance.svg"
            className="[animation-delay:0s] [animation-duration:30s]"
          />
          <Logo
            label="Council rates"
            src="/logo-timeline/council.svg"
            className="[animation-delay:-10s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          {/* <Logo
            label="Asana"
            src="/logo-timeline/asana.svg"
            className="[animation-delay:-40s] [animation-duration:40s]"
          /> */}
          <Logo
            label="Water rates"
            src="/logo-timeline/water.svg"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          {/* <Logo
            label="Microsoft Teams"
            src="/logo-timeline/microsoft-teams.svg"
            className="[animation-delay:-20s] [animation-duration:40s]"
          /> */}
          <Logo
            label="Electricity bills"
            src="/logo-timeline/electricity.svg"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          {/* <Logo
            label="Google Calendar"
            src="/logo-timeline/google-calendar.svg"
            className="[animation-delay:-10s] [animation-duration:40s]"
          /> */}
          <Logo
            label="Land taxes"
            src="/logo-timeline/land.svg"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          {/* <Logo
            label="Google Drive"
            src="/logo-timeline/google-drive.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
          /> */}
          <Logo
            label="Strata fees"
            src="/logo-timeline/strata.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="Legal fees"
            src="/logo-timeline/legal.svg"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />

          <Logo
            label="Loan interest"
            src="/logo-timeline/interest.svg"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        {/* <Row>
          <Logo
            label="Basecamp"
            src="/logo-timeline/basecamp.svg"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />

          <Logo
            label="Discord"
            src="/logo-timeline/discord.svg"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>*/}
        <Row>
          <Logo
            label="Maintenance costs"
            src="/logo-timeline/maintenance.svg"
            className="[animation-delay:-40s] [animation-duration:60s]"
          />
          <Logo
            label="Cleaning fees"
            src="/logo-timeline/cleaning.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
          <Logo
            label="Gardening bills"
            src="/logo-timeline/gardening.svg"
            className="[animation-delay:-0s] [animation-duration:60s]"
          />
        </Row>
        {/* <Row>
          <Logo
            label="Hubspot"
            src="/logo-timeline/hubspot.svg"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Logo
            label="Slack"
            src="/logo-timeline/slack.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row>
          <Logo
            label="Adobe Creative Cloud"
            src="/logo-timeline/adobe-creative-cloud.svg"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Logo
            label="Zoom"
            src="/logo-timeline/zoom.svg"
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row> */}
      </div>
    </div>
  )
}
