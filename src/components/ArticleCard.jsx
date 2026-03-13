import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../utils/image'

export default function ArticleCard({ article, variant = 'default' }) {

  if (variant === 'compact') {
    return (
      <article className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
        
        {article?.hero_image_url && (
          <Link to={`/article/${article.slug}`}>
            <div className="relative h-36 md:h-48 overflow-hidden">
              <img
                src={getImageUrl(article.hero_image_url)}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </Link>
        )}

        <div className="p-3 md:p-4">
          <Link to={`/article/${article.slug}`}>
            <h3 className="text-sm md:text-base font-bold mb-2 text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
              {article.title}
            </h3>
          </Link>

          {article?.published_at && (
            <time className="text-xs text-gray-500">
              {new Date(article.published_at).toLocaleDateString()}
            </time>
          )}
        </div>

      </article>
    )
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300">

      {article?.hero_image_url && (
        <Link to={`/article/${article.slug}`}>
          <div className="relative h-44 md:h-52 lg:h-56 overflow-hidden">

            <img
              src={getImageUrl(article.hero_image_url)}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {article?.categories?.length > 0 && (
              <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 md:px-3 rounded-full">
                {article.categories[0].name}
              </span>
            )}

          </div>
        </Link>
      )}

      <div className="p-4 md:p-5 lg:p-6">

        <Link to={`/article/${article.slug}`}>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
            {article.title}
          </h3>
        </Link>

        {article?.summary && (
          <p className="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
            {article.summary}
          </p>
        )}

        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">

          {article?.published_at && (
            <time>
              {new Date(article.published_at).toLocaleDateString()}
            </time>
          )}

          <Link
            to={`/article/${article.slug}`}
            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            Read more →
          </Link>

        </div>

      </div>

    </article>
  )
}