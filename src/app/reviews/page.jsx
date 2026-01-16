import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata = {
  title: {
    absolute: "Satiesfied Users"
  },
  description: "Best Fast Food in Rangpur",
};

const page = () => {
    return (
        <div>
            <ReviewsPage/>
        </div>
    );
};

export default page;