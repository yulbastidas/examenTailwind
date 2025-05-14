'use client';
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] rounded-2xl overflow-hidden bg-white shadow-[12px_16px_24px_rgba(94,60,164,0.2)] transition-all">
      <figure className="relative">
        <section className="relative h-[300px] bg-gradient-to-r from-[#5e3ca4] to-[#d3b7f5] flex items-center justify-center rounded-t-2xl overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-[#6a44b8] to-[#e4d4f9] opacity-60 rounded-t-2xl"></span>
          <img
            src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
            alt="Nike Running Shoe"
            className="h-56 object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -scale-x-100 -rotate-12 drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
          />
          <button
            className={`absolute top-4 right-4 p-2 rounded-full transition-all z-10 ${isFavorite ? 'bg-[#5e3ca4] shadow-lg' : 'bg-white/30 backdrop-blur-[3px] hover:bg-white/40'} shadow-md`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`h-6 w-6 ${isFavorite ? 'fill-white stroke-white' : 'stroke-white'}`}
            />
          </button>
        </section>

        <figcaption className="p-6 bg-white rounded-b-2xl">
          <header>
            <h2 className="text-xl font-medium text-gray-800 mb-3">Nike Running Shoe</h2>
            <section className="flex gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 text-xs font-medium border border-gray-600 rounded-md text-gray-800">EU38</span>
              <span className="px-3 py-1 text-xs font-medium border border-gray-600 rounded-md text-gray-800">BLACK/WHITE</span>
            </section>
          </header>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-net style.
          </p>

          <footer className="flex justify-between items-center flex-wrap gap-4 sm:gap-0">
            <div>
              <span className="text-xs ml-4 font-semibold text-gray-800">PRICE</span>
              <p className="text-xl ml-4 font-semibold text-gray-800">$69.99</p>
            </div>
            <button className="bg-[#5e3ca4] hover:bg-[#4e3290] text-white px-8 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg">
              Add to cart
            </button>
          </footer>
        </figcaption>
      </figure>
    </article>
  );
};

export default ProductCard;
