"use client";
import { useEffect } from "react";
import React from "react";

function NewsLetter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.getElementById("getWaitlistContainer")?.appendChild(script);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 mt-20">
      <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="text-center max-w-screen-md">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, new articles, and
            exclusive discounts. Feel free to sign up with your email.
          </p>
        </div>
        <div
          id="getWaitlistContainer"
          data-waitlist_id="17274"
          data-widget_type="WIDGET_3"
          className="w-full flex justify-center"
        ></div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </div>
    </section>
  );
}

export default NewsLetter;
