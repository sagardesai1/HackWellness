import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { MailIcon } from "lucide-react";
import Script from "next/script";

function ArticleSidebar() {
  return (
    <div className="hidden lg:block lg:w-1/4">
      <div className="sticky top-32 space-y-10">
        <div className="space-y-4 border rounded-lg px-4 py-4 border-input">
          <div className="text-base font-bold leading-tight text-gray-900 dark:text-white">
            Join our exclusive community and learn more tips and tricks from our
            biohackers
          </div>
          <div className="text-gray-600 text-sm font-normal">
            Our community is currently free right now for a limited time, join
            now!
          </div>
          <div>
            <Link href={"/home/goals"}>
              <button className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                Get Free Access Now
              </button>
            </Link>
          </div>
        </div>
        <div className="space-y-4 border rounded-lg px-4 py-4 border-input">
          <div className="text-base font-bold leading-tight text-gray-900 dark:text-white">
            Follow us to stay updated with our posts and community
          </div>
          <div className="flex flex-row space-x-4">
            <a
              href="https://www.youtube.com/channel/UCoal6QZpH-xp6oEkRa0eTsQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="100%"
                className="w-10 h-10"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                // xmlnsSerif="http://www.serif.com/"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z"
                    style={{ fill: "#ed1f24", fillRule: "nonzero" }}
                  />
                  <path
                    d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z"
                    style={{ fill: "#fff", fillRule: "nonzero" }}
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/thewellnesspundit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                id="Apple"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-10 w-10"
              >
                <defs>
                  <style>{`.cls-1{fill:url(#gradient);}.cls-2{fill:#fff;}`}</style>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="gradient"
                    x1="328.27"
                    x2="183.73"
                    y1="508.05"
                    y2="3.95"
                  >
                    <stop offset="0" stopColor="#ffdb73" />
                    <stop offset="0.08" stopColor="#fdad4e" />
                    <stop offset="0.15" stopColor="#fb832e" />
                    <stop offset="0.19" stopColor="#fa7321" />
                    <stop offset="0.23" stopColor="#f6692f" />
                    <stop offset="0.37" stopColor="#e84a5a" />
                    <stop offset="0.48" stopColor="#e03675" />
                    <stop offset="0.55" stopColor="#dd2f7f" />
                    <stop offset="0.68" stopColor="#b43d97" />
                    <stop offset="0.97" stopColor="#4d60d4" />
                    <stop offset="1" stopColor="#4264db" />
                  </linearGradient>
                </defs>
                <rect
                  className="cls-1"
                  height="465.06"
                  rx="107.23"
                  ry="107.23"
                  width="465.06"
                  x="23.47"
                  y="23.47"
                />
                <path
                  className="cls-2"
                  d="M331,115.22a66.92,66.92,0,0,1,66.65,66.65V330.13A66.92,66.92,0,0,1,331,396.78H181a66.92,66.92,0,0,1-66.65-66.65V181.87A66.92,66.92,0,0,1,181,115.22H331m0-31H181c-53.71,0-97.66,44-97.66,97.66V330.13c0,53.71,44,97.66,97.66,97.66H331c53.71,0,97.66-44,97.66-97.66V181.87c0-53.71-43.95-97.66-97.66-97.66Z"
                />
                <path
                  className="cls-2"
                  d="M256,198.13A57.87,57.87,0,1,1,198.13,256,57.94,57.94,0,0,1,256,198.13m0-31A88.87,88.87,0,1,0,344.87,256,88.87,88.87,0,0,0,256,167.13Z"
                />
                <circle className="cls-2" cx="346.81" cy="163.23" r="21.07" />
              </svg>
            </a>
            <a
              href="https://discord.gg/WUtC8Rxq"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                enableBackground="new 0 0 24 24"
                height="24px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-10 h-10"
              >
                <g id="icon">
                  <circle cx="12" cy="11.9975" fill="#8C9EFF" r="11" />
                  <path
                    d="M16.775,8.4375c0,0,-1.3612,-1.0652,-2.9688,-1.1875l-0.1449,0.2897c1.4535,0.3557,2.1203,0.8654,2.8167,1.4915c-1.2009,-0.613,-2.3866,-1.1875,-4.4531,-1.1875s-3.2523,0.5745,-4.4531,1.1875c0.6965,-0.6261,1.4897,-1.192,2.8167,-1.4915l-0.1449,-0.2897C8.5572,7.4094,7.275,8.4375,7.275,8.4375s-1.5203,2.2043,-1.7813,6.5313C7.0262,16.736,9.3531,16.75,9.3531,16.75l0.4866,-0.6487c-0.8259,-0.2871,-1.7587,-0.7998,-2.5647,-1.7263c0.9613,0.7273,2.4121,1.4844,4.75,1.4844s3.7887,-0.757,4.75,-1.4844c-0.806,0.9265,-1.7388,1.4393,-2.5647,1.7263l0.4866,0.6487c0,0,2.3269,-0.014,3.8594,-1.7813C18.2953,10.6418,16.775,8.4375,16.775,8.4375zM10.0953,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S10.6692,13.7813,10.0953,13.7813zM13.9547,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S14.5285,13.7813,13.9547,13.7813z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M4.2218,19.7782C6.2124,21.7688,8.9624,23,12,23c6.0751,0,11,-4.9249,11,-11c0,-3.0376,-1.2312,-5.7876,-3.2218,-7.7782L4.2218,19.7782z"
                    fill="#231F20"
                    opacity="0.1"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-4 border rounded-lg px-4 py-4 border-input">
          <div className="text-base font-bold leading-tight text-gray-900 dark:text-white">
            Get the best of HackWellness delivered to your inbox
          </div>
          <div className="text-gray-600 text-sm font-normal">
            Subscribe our newsletter for latest world news. Let's stay updated!
          </div>
          {/* <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              style={{ paddingLeft: "40px" }} // Adjust padding to accommodate icon
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="w-5 h-5 text-gray-500" />{" "}
            </div>
          </div> */}
          <div
            id="getWaitlistContainer"
            data-waitlist_id="17274"
            data-widget_type="WIDGET_2"
          ></div>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
          />
          <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></Script>
          {/* <button className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
            Subscribe
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ArticleSidebar;
