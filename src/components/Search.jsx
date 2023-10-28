import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>PAY AWARENESS, NOT MONEY!</h2>
          <p className='py-4'>
          Traveling and immersing yourself in different cultures offer many advantages compared to booking all-inclusive hotel deals. When you travel, you get to experience a deeper and more genuine understanding of the local culture. You can taste local cuisine, learn about customs, and even pick up a bit of the language. This kind of experience goes beyond the typical touristy stuff and encourages you to appreciate the rich diversity of the world. It helps build qualities like tolerance, empathy, and open-mindedness.

Another big benefit of traveling is personal growth. It pushes you out of your comfort zone, presenting challenges like navigating unfamiliar places, adapting to new customs, and dealing with language differences. Overcoming these challenges can lead to increased self-confidence and a sense of accomplishment, things you might not find in the secure environment of an all-inclusive resort.

Travel also broadens your perspective. Seeing the world's diversity up close makes global issues like social inequality, environmental problems, and political conflicts more relatable. It enhances your ability to think critically and feel empathy, ultimately making you a more informed and responsible global citizen.


          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          
          
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>I'M AN EXPERIENCED BACKPACKER</h3>
                <p className='py-1'>EVERYTHING YOU NEED TO BECOME A FREE YOU!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
             
              <p className='bg-gray-800 text-gray-200 py-2'>TALK TO ME AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Bali, Indonesia</option>
                      <option>Coron, Philippines</option>
                      <option>Siem Reap, Cambodia</option>
                      <option>Puerto escondido, Mexico</option>
                      <option>Yogja, Indonesia</option>
                      
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Set a Date</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              
                <button className='w-full my-4'>send</button>
          </form>
      </div>
    </div>
  );
};

export default Search;