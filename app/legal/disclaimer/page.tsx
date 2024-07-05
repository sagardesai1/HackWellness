import React from "react";

function page() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-1 text-center mx-auto max-w-4xl rounded-lg border border-dashed shadow-sm p-5">
        <h3 className="text-2xl leading-8 font-bold tracking-tight pb-10">
          Disclaimer
        </h3>
        <p className="text-sm leading-8 text-muted-foreground">
          The protocols on our website are for informational purposes only and
          are not to be taken as medical or professional advice. Although
          protocols are not explicitly endorsed by the individuals mentioned, we
          have conducted thorough research to ensure our information is accurate
          and keep updating them to stay current. Please note that some product
          links in our content are affiliate links (eg. as an Amazon affiliate,
          we earn commissions from qualifying purchases).
        </p>
      </div>
    </div>
  );
}

export default page;
