import React, { useState } from 'react'

export const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const content = [
    {
      image: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, molestias."
    },
    {
      image: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Explore the wonders of nature and discover hidden treasures in every corner."
    },
    {
      image: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Embrace the beauty of simplicity and find joy in the little things around you."
    }
  ];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  return (
    <div className='h-96 w-80 bg-white shadow-lg flex items-center text-center flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-xl'>
      <div className='h-40 w-full overflow-hidden'>
        <img 
          className='object-cover w-full h-full transition-transform duration-300 hover:scale-110' 
          src={content[currentIndex].image} 
          alt="Card image" 
        />
      </div>
      <h2 className='py-4 text-3xl font-bold text-gray-800'>Hello 👋</h2>
      
      <p className='px-6 text-gray-600 mb-4 h-20'>{content[currentIndex].text}</p>
      <button 
        onClick={handleClick}
        className='text-white bg-green-500 w-11/12 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
      >
        Next Content
      </button>
    </div>
  )
}

