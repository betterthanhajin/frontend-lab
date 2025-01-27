import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative logo">
          <h3
            className="absolute top-[38%] left-[25%] text-center font-bold text-[1.5rem]"
            style={{
              lineHeight: "1.3rem",
            }}
          >
            Frontend <br />
            -<br />
            Lab
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="coolshapes flower-1 "
          >
            <g clip-path="url(#cs_clip_1_flower-1)">
              <mask
                id="cs_mask_1_flower-1"
                style={{ maskType: "alpha" }}
                width="200"
                height="186"
                x="0"
                y="7"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  d="M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z"
                ></path>
              </mask>
              <g mask="url(#cs_mask_1_flower-1)">
                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                <path
                  fill="url(#paint0_linear_748_4711)"
                  d="M200 0H0v200h200V0z"
                ></path>
                <g filter="url(#filter0_f_748_4711)">
                  <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
                  <path
                    fill="#0CE548"
                    fill-opacity="0.35"
                    d="M196 91H82v102h114V91z"
                  ></path>
                  <path
                    fill="#FFE500"
                    fill-opacity="0.74"
                    d="M113 80H28v120h85V80z"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_748_4711"
                width="278"
                height="310"
                x="-27"
                y="-55"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_748_4711"
                  stdDeviation="27.5"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_748_4711"
                x1="186.5"
                x2="37"
                y1="37"
                y2="186.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0E6FFF" stop-opacity="0.51"></stop>
                <stop
                  offset="1"
                  stop-color="#00F0FF"
                  stop-opacity="0.59"
                ></stop>
              </linearGradient>
              <clipPath id="cs_clip_1_flower-1">
                <path fill="#fff" d="M0 0H200V200H0z"></path>
              </clipPath>
            </defs>
            <g
              style={{ mixBlendMode: "overlay" }}
              mask="url(#cs_mask_1_flower-1)"
            >
              <path
                fill="gray"
                stroke="transparent"
                d="M200 0H0v200h200V0z"
                filter="url(#cs_noise_1_flower-1)"
              ></path>
            </g>
            <defs>
              <filter
                id="cs_noise_1_flower-1"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence
                  baseFrequency="0.6"
                  numOctaves="5"
                  result="out1"
                  seed="4"
                ></feTurbulence>
                <feComposite
                  in="out1"
                  in2="SourceGraphic"
                  operator="in"
                  result="out2"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="out2"
                  mode="overlay"
                  result="out3"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">101호실에 오신걸 환영합니다.</li>
          <li>즐거운 탐험되시길 빌어요!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/101"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            101호 입장
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
