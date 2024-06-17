import {reviews} from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our 
        <span className="text-coral-red"> Customers</span> Say
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">Here geniune stories from our satisfying customers about their exceptional experiences with us.</p>
    
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          
          />
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews