import React from 'react'

const MealDetailsPage = ({ params }) => {
  return (
    <main>
      <h3>meals dynamic page</h3>
      <p>{params.mealSlug}</p>
    </main>
  );
};

export default MealDetailsPage;