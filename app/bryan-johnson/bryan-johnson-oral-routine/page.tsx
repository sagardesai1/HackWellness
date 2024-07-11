import React from "react";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";
import YoutubePlayer from "@/components/YoutubePlayer";
import BryanJohnsonWaterFlossing from "@/images/BryanJohnsonImages/BryanJohnsonWaterFlossing.jpeg";
import ArticleSidebar from "@/components/ArticleSidebar";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson Oral Routine",
    template: `%s | Bryan Johnson Oral Routine`,
  },
  description:
    "Bryan Johnson’s oral routine has helped him reverse age his gums and teeth. Here are all of his suggestions in the exact order that he does them.",
  keywords: [
    "Bryan Johnson oral routine",
    "Bryan Johnson oral health",
    "Bryan Johnson blueprint oral health",
    "Bryan Johnson mouth wash",
    "Bryan Johnson teeth",
    "Bryan Johnson mouth guard",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson Oral Routine",
      template: `%s | Bryan Johnson Oral Routine`,
    },
    description:
      "Bryan Johnson’s oral routine has helped him reverse age his gums and teeth. Here are all of his suggestions in the exact order that he does them.",
    url: new URL(`${BASE_URL}/bryan-johnson/bryan-johnson-oral-routine`),
    type: "article",
  },
};

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg">
          <Link href={"/bryan-johnson"}>
            <div className="flex flex-row gap-2 items-center mb-10">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
              <span className="text-sm font-semibold text-gray-800">
                More articles on Bryan Johnson{" "}
              </span>
            </div>
          </Link>
          <header className="mb-4 lg:mb-6 not-format">
            <div className="inline-flex space-x-6 items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                src={BryanJohnsonImage}
                alt={"Bryan Johnson"}
                width={58}
                height={58}
                className="rounded-full"
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Bryan Johnson
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Founder and CEO of Kernel
                </p>
              </div>
            </div>
          </header>
          <h1 className="mt-8 text-3xl font-extrabold leading-8 text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Bryan Johnson’s Oral Routine
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Bryan Johnson’s oral routine has helped him fix his rotting teeth
            and reverse age his gums such that his dentist now tells him he has
            the gums of a healthy teenager. If you’re looking to up your dental
            game, follow these steps for a healthier, brighter smile.
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <ol className="list-decimal pl-5">
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Water Flossing</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal">
                      Bryan Johnson starts his oral routine with a water flosser
                      to remove larger debris stuck to his teeth. He uses a{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Waterpik-Cordless-Advanced-Flosser-Brilliant/dp/B01GNVF8BK?crid=3A7ZWSDUL49MD&dib=eyJ2IjoiMSJ9.OxcE7WZbv26lMd2sbv9E_hSEqVQTyNxpvz76G_CUK9FUCqKtBF83qT_dd1jz9HTiPs6K4WY0DuC3Cf2YeWvO9NIIO8d02X6t128n5HTMsDqmb4nsUDcZCEnjAXpJjHOTBt0QsfCU3IWy6kOTO1AkQYT-qVf1ssU5dJDwfk_TZr346ChZtTX6kCHXOiyJiNzk6tKKEm1FMr0f_yuDEFd5cCvkryNhNK0otIcCfuaNerc3307SloLj_UKroEi-AlaKQeycyulIaMuFWV222cMTvFg5UO5MvF40QlJaMBDt8UY.AOD5hgXJ_Cr15hdAAi7kvJKEoKV4hZSfmbARcq_MbIk&dib_tag=se&keywords=black+cordless+advanced+2.0+water+flosser&qid=1720673616&sprefix=black+cordless+advanc,aps,214&sr=8-5&linkCode=sl1&tag=hackwellnes0c-20&linkId=5af6c6ae800209ebfc55f4fdd5e4eb2f&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        Waterpik Black Cordless Advanced 2.0 Water Flosser
                      </a>{" "}
                      to shoot out a highly pressured stream of water around his
                      teeth and along his gum line.
                    </div>
                  </li>
                  <figure className="my-14 flex flex-col items-center">
                    <Image
                      src={BryanJohnsonWaterFlossing}
                      alt="Bryan Johnson water flossing"
                      className="rounded-lg w-full max-w-2xl"
                    />
                    <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
                      Bryan Johnson water flossing
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Flossing</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal leading-8">
                      Next up is flossing with{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Dr-Tungs-Natural-Cardamom-Flavor/dp/B002S4JP5C?crid=HI9KSSK5LQN4&dib=eyJ2IjoiMSJ9.JLYEmKqRcyhO_SLOCKhWZQPgg6xamefUW7bO0ciFoFPd3IKSXlRU-8Q5iRZQ4oRUHSuD6yfBQn2o0eMIlpmuOv-GYIUf-dEh1RtlQvehQLXP654TYaxWj86qegc4GsanREFk4y_N_scpAaAI2tsAUwgEc3U5oV0cc94Dus-AfkgjUzN_0b9GmS6qV5-TLHN1beIezLacKU8EG9I_sd9T3J9LILm4u-uE-cKXLOi1ZABdnrtS7dLbBJP0PhWIlR6L_Vc7CrgURoq3DOFEnq_6icLPAGpZ1CHLcosHwBU9ZCU.eLqmy6kqPLemxJ2mfb-fVv-QbmQHs6UecsrIdtSYhns&dib_tag=se&keywords=dr+tungs&qid=1717616374&sprefix=dr+tungs,aps,282&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=sl1&tag=hackwellnes0c-20&linkId=fa7b25487b0d3eacf51c53c01a3d24fc&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        DrTung’s Smart Floss
                      </a>{" "}
                      - Bryan Johnson prefers this brand because the thicker
                      string is proven to remove 25% more plaque than thinner
                      strings. He says that both water and traditional flossing
                      are essential, as flossing targets areas between the teeth
                      while water flossing can get to places that traditional
                      floss cannot reach such as in the pockets below the gum
                      line.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Brushing</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal leading-8">
                      When it comes to brushing, Bryan Johnson opts for{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Oral-B-1000-Rechargeable-Electric-Toothbrush/dp/B003UKM9CO?dib=eyJ2IjoiMSJ9.M4y5ifXws14tr3f4zPMers2VYdZTRQX0BVvFoZPmPOGiRBqq3sy-AeCuFkg1p-sr0LYFpyVlwyWv0kTz0Wz0DCnvPrPAev3DzjrDXuWLwrwaNyrO3dtnqPVZiZ0zZnzqPkizFxpcKLLlkjvl9FfcSu1pITy1hEFnvACkq5I8U37-Z1it-eHmFKD8uIIRCMAqo-UvFcbdERpVA6fedMry-Mj0akQVcxmKsTpk-T3mR1j-1-yie7KQrxoirnvVwGHx_cFaOfdJpBjGNtxt_T18HLog_e3_FStdo3SOiSWOkEQ.1ARpl13xZx07iBaGS3xaPWNhN1zbizl88-ubXqnEPdo&dib_tag=se&keywords=oral+b+electric+toothbrush&qid=1717617360&sbo=RZvfv//HxDF%2BO5021pAnSA%3D%3D&sr=8-5&linkCode=sl1&tag=hackwellnes0c-20&linkId=0f144af1c8531e1e1379675eb9a068d6&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        an electric toothbrush from Oral-B
                      </a>{" "}
                      and chooses{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Oral-B-Sensitive-Electric-Toothbrush-Replacement/dp/B00006ANDK?dib=eyJ2IjoiMSJ9.Y5z13Xx-kB2TVMs4_YiyZ5-j59sCMxolX_tQCGEVRl7V_rWz6utomKCD-RVXKzX7QPsmw8X9OjubTLqR9ZyVFfpK1KXT79r6TI0J8lH8uouQW-4TMS4JisaN9RbrCiuL-Vo95DSPS_Bsls7tS-6Q4z79K-BhUY1HkXcAo7XnT_k-WGglE4GEMxmHvdv2fYL2TSaoms2Vlh4XchLeqTcB_qO2WwbNbVxvPciOOR-PP9O_hIRXDfeKN5zY8ABSBHDr5dynTzmwkklwMx3Ry3iyHG5pHjyfXxI8jiIaOEelrk0.m_VCKnyOBnX_ZNNsnglE9R2V9MmTQHxd4Tdyj5ER76o&dib_tag=se&keywords=oral+b+soft+replacement+heads&qid=1717617499&sr=8-5&linkCode=sl1&tag=hackwellnes0c-20&linkId=0532daf0ed750550b1acd19c897856f9&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        soft toothbrush heads.
                      </a>{" "}
                      He finds it more effective than a manual toothbrush, but
                      ultimately, he recommends using whatever you’re most
                      comfortable with. One of his key tips is to wait at least
                      30 minutes after eating before brushing your teeth to
                      avoid damaging the enamel.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Toothpaste</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal leading-8">
                      Bryan Johnson adds a bit of variety to his routine by
                      using different toothpastes in the morning and at night.
                      He used to use{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/dp/B00AWKQWI2?&linkCode=sl1&tag=hackwellnes0c-20&linkId=a1c88fadadc1c192d4f24c45707edb81&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        Sensodyne toothpaste
                      </a>{" "}
                      but has since switched over to using a fluoride-free
                      option called{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Dr-Collins-BioMin-Toothpaste-Ounce/dp/B07H944RLG?crid=QZU65C69KILX&dib=eyJ2IjoiMSJ9.2j_JFfeci7_Hmvlo_lGg0b1VM_g5Dj-WVWH-9pWJIHhTPmlZLN8Fxgxn0UHVstm0bTwGCuXsmptVPo5SYID3DQLRp8VWfu0VBWth8C-SUeaoK8Mfh49JavOvOkt90zGo8_vl_OJYMxsXifCU5cvnx6vO1YccURzZ40A-qaN8Fh-A9DkhKuCOGHVw1MTfpY0D9Z98TkseHHuHdUXcnIs_vuhuc_dTcTi9y3Pnfp1nE8zg-yrt1HPRyh5HZ5DsKq9MLt2YuAtHw7-bKHfYyTkGROl3rGBVgtyxlWVDgLG7vco.zlpClOAXgvcx6HOtGM1nTwwHW6yNNqAEgwhPYfRxmlw&dib_tag=se&keywords=biomin+toothpaste&qid=1717626533&s=beauty&sprefix=biomin+toothpaste,beauty,181&sr=1-5&linkCode=sl1&tag=hackwellnes0c-20&linkId=87cc2443cba07234e21d0f04835b156f&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        Dr. Collins Biomin Tooth Sensitivity Toothpaste.
                      </a>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Tongue Scraper</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal leading-8">
                      The tongue scraper has become a staple in Bryan Johnson’s
                      routine as he believes cleaning your tongue is just as
                      important as brushing your teeth. He uses{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/Dr-Tungs-Tongue-Cleaner-Stainless/dp/B00064JGBO?crid=27SWCVG44WCAV&dib=eyJ2IjoiMSJ9.FYH1MFan-7tmRrpfB6TIE8Msbr6RbXO2hvQ7hn3O-mZ6dqfExNTJFqu0UpAloQ4CYUj2UwbyC8tS5AESM0V-R2sJxEHvmlyG3fI6orZJQkeQcH0aNHgQE8L07TP9_OkKiUSLcs-roBGfTWzzGeHjlnAov4RAGNAYKA9T39wPSKl0kodAgdykki7oTT0sntPv0HZL6dalUTgQJ2Prb_4Ly5LA_SzsYtDOv809o7eNGJkVHzNrkPFwkIRnUvLWu3GjnLGclsfYtrIvyI37grQyzeGlFc192fKmUDdwMYYlPlA.c7MuqV3n3LlmNZOYZXhUNS8lm0kGxOg7Xi1Bgtp9jow&dib_tag=se&keywords=dr+tungs+tongue+scraper&qid=1717618607&s=hpc&sprefix=dr+tungs+tongue,hpc,249&sr=1-5&linkCode=sl1&tag=hackwellnes0c-20&linkId=7a2f4bf867ed71239a4988f7a374aa3b&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        DrTung’s tongue scraper
                      </a>{" "}
                      to get rid of bacteria and debris that tend to stick to
                      the tongue even after brushing.
                    </div>
                  </li>
                  <div className="my-10">
                    <YoutubePlayer
                      src="https://www.youtube.com/embed/3ozhjLsJq78?si=VIyBfQufoy3fnueH"
                      title="Bryan Johnson tongue scraper"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Mouthwash</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal leading-8">
                      Bryan Johnson uses mouthwash to freshen his breath before
                      physically close encounters with people such as when he’s
                      about to speak with someone or before a kiss. His
                      mouthwash of choice is{" "}
                      <a
                        target="_blank"
                        href={
                          "https://www.amazon.com/TheraBreath-Refreshing-Antigingivitis-Antiplaque-Formulated/dp/B0C2JTS4JL?crid=3NFSVXY82OWBT&dib=eyJ2IjoiMSJ9.s-9FL0xhxz9YlPmy2A-p4XcMoVw3IVjaBs4cTVgiGA5qHFDpkqgbx1TViyprzc0GR3c10Xm5NiJIc6tZPCnvC6Z8DpZhwwbjV86qIYdo1YHRLGhUXVZObCey4c1ngmNmVABxOYxWQKKxvQ0ubfOAfy1JhYZJTQbgodychDRhFX0T96U_aEOgZZP0_cmTvrO4Ace68weS7z8pHMBu9X0lPrINjvYPwVq-SdjMpkWbEibNHJ5DhRCBq29VYYTFeinOtTXXJiOwJcvwjCQpHqoGdlR0cj_VuNtFKztsBNZt40Y.LHRM8emvKURH8ECh1zm0_ZwaYcWuhhpq_SqVEnE4wy0&dib_tag=se&keywords=therabreath%2Bplaque%2Bcontrolmouthwash&qid=1720675492&sprefix=therabreath%2Bplaque%2Bcontrolmouthwash,aps,249&sr=8-1&th=1&linkCode=sl1&tag=hackwellnes0c-20&linkId=759f7c85fc1463694bee962811cfbc38&language=en_US&ref_=as_li_ss_tl"
                        }
                        rel="noopener noreferrer nofollow"
                        className="underline text-lg leading-8 text-indigo-600"
                      >
                        TheraBreath Plaque Control Mouthwash,
                      </a>{" "}
                      which also helps prevent cavities and improve gum health.
                    </div>
                  </li>
                </div>
              </ol>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              3 Things to Avoid
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              To maximize oral health, Bryan Johnson advises avoiding the
              following:
            </p>
            <div className="text-gray-600 text-lg mt-4 font-normal	">
              <ol className="list-decimal pl-5 mt-6 text-lg leading-8">
                <li className="">
                  <span className="font-semibold text-black">Sugar:</span>{" "}
                  <span className="text-gray-600">
                    Stay away from sticky candies, caramels, ice cream, cookies,
                    soda, and fruit juices as these feed the bad bacteria in
                    your mouth that cause gum disease and cavities. Even starchy
                    foods like bread and potato chips can get stuck in your
                    teeth, providing a feast for bacteria.
                  </span>
                </li>
                <li className="mt-6">
                  <span className="font-semibold text-black">
                    Acidic Liquids:
                  </span>{" "}
                  <span className="text-gray-600">
                    Carbonated drinks, coffee, tea, alcohol, sports drinks, and
                    citrus juices can erode your enamel. It’s best to limit
                    these to protect your teeth.
                  </span>
                </li>
                <li className="mt-6">
                  <span className="font-semibold text-black">Dry Mouth:</span>{" "}
                  <span className="text-gray-600">
                    Avoid mouth breathing, limit caffeine, and do not smoke as
                    all these contribute to dry mouth. Saliva is important to
                    maintain a healthy oral environment, and can be boosted by
                    drinking water regularly and chewing gum.
                  </span>
                </li>
              </ol>
            </div>
            <div className="my-10">
              <YoutubePlayer
                src="https://www.youtube.com/embed/s05hatzEL0c?si=UXKhkJ5WfisYNvPc"
                title="Bryan Johnson 3 things to avoid for oral health"
              />
            </div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Following these tips will help you develop impeccable oral health,
              but it’s also important to keep going to the dentist for checkups
              twice a year to get a specialized cleaning and to screen for
              issues such as cavities or gum disease. Hopefully you’ll get some
              positive feedback from your dentist after implementing this
              routine just like Bryan Johnson did!
            </p>
            <div className="my-10">
              <YoutubePlayer
                src="https://www.youtube.com/embed/sg_gCjiQAeY?si=2QNWYFMPdoJc7Lqr"
                title="Bryan Johnson oral health"
              />
            </div>
          </div>
          <div className="mt-20 mb-40">
            <p className="mb-2 text-2xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-3xl dark:text-white overflow-hidden">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://www.youtube.com/watch?v=yxOtUJ5amaw"}
                  rel="noopener noreferrer"
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=yxOtUJ5amaw
                </a>
              </li>
            </ul>
          </div>
        </article>
        <ArticleSidebar />
      </div>
      <RelatedArticles articles={articles} />
      <NewsLetter />
      <div className="my-20 flex items-center justify-center gap-x-6">
        <Link
          href="/home/goals"
          className="flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Start Building Your Protocol Now
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default page;
