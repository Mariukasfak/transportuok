import React from 'react';
import { Calendar, User, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('lt-LT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naujienos ir patarimai
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sužinokite daugiau apie išvežimo paslaugas skirtinguose Lietuvos miestuose
            ir gaukite naudingų patarimų iš mūsų ekspertų.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={post.imageWidth}
                  height={post.imageHeight}
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {post.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-x-4 gap-y-1">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  {post.city && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {post.city}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical' as any,
                    WebkitLineClamp: 2 as any
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-gray-600 mb-4 overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical' as any,
                    WebkitLineClamp: 3 as any,
                    maxHeight: '4.5rem'
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Author and CTA */}
                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="flex items-center text-sm text-gray-500 min-w-0 max-w-[60%]">
                    <User className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{post.author}</span>
                  </div>

                  <Link
                    to={`/naujienos/${post.slug}`}
                    className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors inline-flex items-center flex-shrink-0"
                    aria-label={`Skaityti daugiau: ${post.title}`}
                  >
                    Skaityti daugiau
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nemokamas elektronikos ir buitinės technikos išvežimas
            </h3>
            <p className="text-gray-600 mb-6">
              Kaunas, Vilnius ir visa Lietuva. Greitas surinkimas ir patikimas išvežimas – užsakykite internetu arba skambinkite.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Kaunas Contact */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Kaunas ir regionas</h4>
                <p className="text-green-700 text-sm mb-3">
                  Baldų, buitinės technikos ir elektronikos išvežimas
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+37069925744"
                    className="block text-green-800 font-semibold hover:text-green-900"
                  >
                    📞 +370 699 25 744
                  </a>
                  <a
                    href="mailto:info@transportuok.lt"
                    className="block text-green-800 hover:text-green-900"
                  >
                    📧 info@transportuok.lt
                  </a>
                </div>
              </div>

              {/* Vilnius Contact */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Vilnius ir visa Lietuva</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Elektronikos surinkimas ir transporto paslaugos
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+37066424024"
                    className="block text-blue-800 font-semibold hover:text-blue-900"
                  >
                    📞 +370 664 24 024
                  </a>
                  <a
                    href="mailto:karavanaslt@gmail.com"
                    className="block text-blue-800 hover:text-blue-900"
                  >
                    📧 karavanaslt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
