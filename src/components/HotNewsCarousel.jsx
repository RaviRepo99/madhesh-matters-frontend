import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../utils/image'

export default function HotNewsCarousel({ articles = [] }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [articles])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <div className="bg-red-600 text-white py-4 px-3 md:px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 md:gap-4 mb-3">
          <span className="font-bold text-sm md:text-base uppercase flex-shrink-0">Hot News</span>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-700 hover:bg-red-800 text-white p-2 rounded-r hidden md:flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="flex-shrink-0 w-64 md:w-72 group/card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Image */}
                  {article.hero_image_url && (
                    <div className="relative overflow-hidden h-32 md:h-40 bg-gray-200">
                      <img
                        src={getImageUrl(article.hero_image_url)}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-3 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 group-hover/card:text-red-600 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <time>
                        {new Date(article.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      {article.category && (
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold">
                          {article.category.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-700 hover:bg-red-800 text-white p-2 rounded-l hidden md:flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
