import React, { useState } from 'react';


const galleryData = [
  { id: 1, category: 'landscape', title: 'Nature', img: 'nature.jpg' },
  { id: 2, category: 'landscape', title: 'Mountains', img: 'mountains.jpg' },
  { id: 3, category: 'portrait', title: 'Person', img: 'person.jpg' },
  { id: 4, category: 'portrait', title: 'Portrait', img: 'portrait.jpg' },
  { id: 5, category: 'abstract', title: 'Abstract', img: 'abstract.jpg' },
  { id: 6, category: 'abstract', title: 'Colors', img: 'colors.jpg' },
];

const PhotoFilter = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredGallery = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  return (
    <div>
      <FilterOptions categories={['all', 'landscape', 'portrait', 'abstract']} activeFilter={filter} onChangeFilter={handleFilterChange} />
      <GalleryItems data={filteredGallery} />
    </div>
  );
};

const FilterOptions = ({ categories, activeFilter, onChangeFilter }) => {
  return (
    <div className="filter-options">
      <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => onChangeFilter('all')}>All</button>
      {categories.map(category => (
        <button key={category} className={activeFilter === category ? 'active' : ''} onClick={() => onChangeFilter(category)}>{category}</button>
      ))}
    </div>
  );
};

const GalleryItems = ({ data }) => {
  return (
    <div className="gallery">
      {data.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PhotoFilter;
