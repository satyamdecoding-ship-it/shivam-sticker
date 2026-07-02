

export default function ProductQuality() {
    const reviews = [
      {
        name: "Rahul Sharma",
        city: "Delhi",
        rating: 5,
        review:
          "Excellent sticker quality! Colors are vibrant and the finish is premium. Highly recommended.",
      },
      {
        name: "Aman Verma",
        city: "Lucknow",
        rating: 5,
        review:
          "I ordered bike stickers and they fit perfectly. Waterproof and very durable.",
      },
      {
        name: "Shivam Patel",
        city: "Kanpur",
        rating: 5,
        review:
          "Amazing print quality. The adhesive is strong and the stickers still look brand new after months.",
      },
      {
        name: "Priya Singh",
        city: "Jaipur",
        rating: 5,
        review:
          "Fast delivery and premium quality. Better than what I expected.",
      },
      {
        name: "Mohit Kumar",
        city: "Patna",
        rating: 5,
        review:
          "Worth every rupee. Colors don't fade even after washing the bike.",
      },
      {
        name: "Akash Yadav",
        city: "Bhopal",
        rating: 5,
        review:
          "Very satisfied with the quality. Will definitely order again.",
      },
    ];
  
    return (
      <main className="bg-gray-50 min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Premium Sticker Quality
            </h1>
  
            <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
              We use premium quality material, waterproof printing, vibrant
              colors and long-lasting adhesive so your bike always looks stylish.
            </p>
          </div>
        </section>
  
        {/* Video */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Watch Our Sticker Quality
          </h2>
  
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border bg-black">
              <iframe
                width="360"
                height="640"
                src="https://www.youtube.com/embed/moGfult1JDY"
                title="Sticker Quality Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
  
          <p className="text-center mt-6 text-gray-600">
            See the real quality, shine, finishing and durability of our premium
            bike stickers.
          </p>
        </section>
  
        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Customers Love Our Stickers
          </h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="font-bold text-xl mb-2">Waterproof</h3>
              <p className="text-gray-600">
                Resistant to rain, washing and everyday use.
              </p>
            </div>
  
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-bold text-xl mb-2">Vibrant Colors</h3>
              <p className="text-gray-600">
                High-resolution printing with rich colors.
              </p>
            </div>
  
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl mb-2">Scratch Resistant</h3>
              <p className="text-gray-600">
                Protective finish helps keep the sticker looking new.
              </p>
            </div>
  
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-xl mb-2">Premium Finish</h3>
              <p className="text-gray-600">
                Smooth glossy finish with long-lasting adhesive.
              </p>
            </div>
          </div>
        </section>
  
        {/* Reviews */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Reviews
            </h2>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="text-yellow-500 text-xl mb-3">
                    {"⭐".repeat(review.rating)}
                  </div>
  
                  <p className="text-gray-700 italic">
                    "{review.review}"
                  </p>
  
                  <div className="mt-5">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Guarantee */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-black text-white rounded-3xl p-10 text-center shadow-2xl">
              <h2 className="text-4xl font-bold">
                Our Quality Promise
              </h2>
  
              <p className="mt-6 text-gray-300 text-lg leading-8">
                Every sticker is printed using premium materials and inspected
                before shipping. Our goal is to deliver vibrant colors, strong
                adhesion and long-lasting durability that enhances the look of
                your bike.
              </p>
  
              <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Explore Our Collection
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }