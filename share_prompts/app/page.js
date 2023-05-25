import React from 'react';

export default function Home() {
  const data = [
    {
      "title": "Simple title",
      "description": "Simple description about everything and everything in this application and its components including components that require it",
      "slug": "simple-title-1"
    },
    {
      "title": "Simple title",
      "description": "Simple description about everything and everything in this application and its components including components that require it",
      "slug": "simple-title-2"
    },
    {
      "title": "Simple title",
      "description": "Simple description about everything and everything in this application and its components including components that require it",
      "slug": "simple-title-3"
    },
    {
      "title": "Simple title",
      "description": "Simple description about everything and everything in this application and its components including components that require it",
      "slug": "simple-title-4"
    },
  ]

  return (
    <main className="w-full h-screen bg-blue-200">
      <h3 className="text-3xl text-center pt-12 text-black">Hi, I'm Nurullo Salaydinov</h3>
      <div className="container mx-auto py-6">
      <div id="cards" className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {
          data.map(item => {
            return (
              <div id="card" className="w-full h-auto py-4 px-3 rounded-md bg-white">
                <h3 className="text-3xl text-gray-400 mb-3">{item.title}</h3>
                <p className="text-xl text-black mb-3">{item.description}</p>
                <a href={item.slug} className="text-white bg-black py-2 px-4 rounded-lg">Read More</a>
              </div>
            )
          })
        }
      </div>
      </div>
    </main>
  )
}
