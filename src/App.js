import React from 'react';
import Reviews from './component/Reviews.js'

export default function App() {
    return (
        <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Reviews />
        </section>
      </main>
    )
}
