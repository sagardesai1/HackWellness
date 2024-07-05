import React from "react";
import { RelatedArticlesProps } from "@/types/Articles";
import Image from "next/image";

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <article className="max-w-xs" key={index}>
              <a href={article.href}>
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    className="object-cover w-full h-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </a>
              <h2 className="mt-4 mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href={article.href}>{article.title}</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                {article.description}
              </p>
              <a
                href={article.href}
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in {article.readLength}
              </a>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RelatedArticles;
