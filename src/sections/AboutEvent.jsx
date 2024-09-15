import React from 'react';
import Button from '../components/Button'; // Adjust path as needed

const AboutEvent = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-black flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Text content on the left */}
      <div className="w-full md:w-3/5 p-6 pl-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-palanquin">About the Event</h1>
        <p className="text-lg text-gray-300 mb-6">
          Join us for an exciting event filled with amazing activities, speakers, and prizes! It's a great opportunity to connect, learn, and have fun with like-minded individuals. We can't wait to see you there.
          Join us for an exciting event filled with amazing activities, speakers, and prizes! It's a great opportunity to connect, learn, and have fun with like-minded individuals. We can't wait to see you there.
        </p>
        <Button
          label="Learn More"
          backgroundColor="bg-gradient-custom"
          textColor="text-white"
          borderColor="border-black"
        />
      </div>

      <div className="w-full md:w-2/5 p-6">
      /* From Uiverse.io by Manish-Tamang */ 
<aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">bash</p>
  </div>
  <div class="mt-4">
    <p class="text-green-400">$ npm install next</p>
    <p class="text-white">+ next@10.2.3</p>
    <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
    <p class="text-green-400">$</p>
  </div>
</aside>

      </div>
    </section>
  );
};

export default AboutEvent;
