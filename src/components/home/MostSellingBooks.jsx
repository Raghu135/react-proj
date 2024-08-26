import React from 'react';
import './FeaturedBooks.scss';

function MostSellingBooks() {
  return (
    <div className='mostSellingBooks'>
      <h3>Most Selling Books</h3>
      <div className='booksContainer'>
        <div className='cardimge'>
          <div className='imgdiv'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg" alt="Neymar"></img>
          </div>
          <div className='titlediv'>
            <h3>Neymar</h3>
          </div>
        </div>
        <div className='cardimge'>
          <div className='imgdiv'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg" alt="Neymar"></img>
          </div>
          <div className='titlediv'>
            <h3>Neymar</h3>
          </div>
        </div>
        <div className='cardimge'>
          <div className='imgdiv'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/400px-Neymar_PSG.jpg" alt="Neymar"></img>
          </div>
          <div className='titlediv'>
            <h3>Neymar</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostSellingBooks;
