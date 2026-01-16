import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
import { connect } from '../lib/dbconnect';

const getFeedbacks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`,{
        cache: "force-cache",
        next:{revalidate:60}
    })
    return await res.json()
}

export const metadata = {
  title: "Feedbacks"
};

const Feedbacks =async () => {
    // const allFeedbacks =await getFeedbacks()
    
    // উপরের getFeedbacks() function এর পরিবর্তে আমারা ১ লাইনে Code লিখলাম
    const allFeedbacks = await connect("feedbacks").find().toArray()
    return (
        <div>
            <div className=" flex justify-between items-center">
            <h1 className='text-2xl font-bold'>{allFeedbacks.length} Feedbacks Found</h1>
            <Link className='btn' href={'/feedbacks/add'}>Add Feedback</Link>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {allFeedbacks.map(feedback=> <FeedbackCard key={feedback._id} feedback={feedback}/>) }
            </div>
        </div>
    );
};

export default Feedbacks;