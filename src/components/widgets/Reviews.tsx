'use client';

import { useState, useEffect } from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';
import { ReviewsProps, Review } from '~/shared/types';

const StarRating = ({
  rating,
  onRatingChange,
  interactive = false,
  size = 'medium'
}: {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: 'small' | 'medium' | 'large';
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (interactive ? (hoverRating || rating) : rating);
        return (
          <button
            key={star}
            type="button"
            className={`${sizeClasses[size]} ${
              interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'
            } text-yellow-400`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            disabled={!interactive}
          >
            {filled ? <IconStarFilled /> : <IconStar />}
          </button>
        );
      })}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
        <StarRating rating={review.rating} size="small" />
      </div>
      <div className="text-sm text-gray-500">
        {new Date(review.dateSubmitted).toLocaleDateString()}
        {review.isVerified && (
          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gold-500/10 text-gold-600">
            Verified
          </span>
        )}
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed">{review.reviewText}</p>
  </div>
);

const ReviewForm = ({
  serviceName,
  onSubmit
}: {
  serviceName: string;
  onSubmit: (review: Omit<Review, 'id' | 'dateSubmitted'>) => void;
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    rating: 0,
    reviewText: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0 || !formData.customerName.trim() || !formData.reviewText.trim()) {
      alert('Please fill in all required fields and provide a rating.');
      return;
    }

    setIsSubmitting(true);

    try {
      onSubmit({
        serviceName,
        customerName: formData.customerName.trim(),
        email: formData.email.trim() || undefined,
        rating: formData.rating,
        reviewText: formData.reviewText.trim()
      });

      // Reset form
      setFormData({
        customerName: '',
        email: '',
        rating: 0,
        reviewText: ''
      });

      alert('Thank you for your review! It has been submitted successfully.');
    } catch (error) {
      alert('There was an error submitting your review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Experience</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="customerName"
              value={formData.customerName}
              onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <StarRating
            rating={formData.rating}
            onRatingChange={(rating) => setFormData(prev => ({ ...prev, rating }))}
            interactive={true}
            size="large"
          />
        </div>

        <div>
          <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">
            Your Review *
          </label>
          <textarea
            id="reviewText"
            rows={4}
            value={formData.reviewText}
            onChange={(e) => setFormData(prev => ({ ...prev, reviewText: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Share your experience with our service..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-3 bg-primary-900 text-white font-medium rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

const Reviews = ({
  serviceName,
  header,
  maxReviews = 10,
  allowSubmission = true,
  id,
  hasBackground = false,
}: ReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const loadReviews = () => {
      try {
        const storedReviews = localStorage.getItem('anderson-carl-reviews');
        if (storedReviews) {
          const allReviews: Review[] = JSON.parse(storedReviews);
          const serviceReviews = allReviews
            .filter(review => review.serviceName === serviceName)
            .sort((a, b) => new Date(b.dateSubmitted).getTime() - new Date(a.dateSubmitted).getTime())
            .slice(0, maxReviews);
          setReviews(serviceReviews);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [serviceName, maxReviews]);

  const saveReview = (newReview: Omit<Review, 'id' | 'dateSubmitted'>) => {
    try {
      const review: Review = {
        ...newReview,
        id: `review-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        dateSubmitted: new Date().toISOString(),
      };

      // Get existing reviews
      const storedReviews = localStorage.getItem('anderson-carl-reviews');
      const allReviews: Review[] = storedReviews ? JSON.parse(storedReviews) : [];

      // Add new review
      allReviews.push(review);

      // Save to localStorage
      localStorage.setItem('anderson-carl-reviews', JSON.stringify(allReviews));

      // Update local state
      const serviceReviews = allReviews
        .filter(r => r.serviceName === serviceName)
        .sort((a, b) => new Date(b.dateSubmitted).getTime() - new Date(a.dateSubmitted).getTime())
        .slice(0, maxReviews);
      setReviews(serviceReviews);
    } catch (error) {
      console.error('Error saving review:', error);
      throw error;
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {header && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Headline
              header={header}
              titleClass="text-3xl md:text-4xl font-bold text-gray-900"
              subtitleClass="text-lg text-gray-600 mt-4"
            />
          </div>
        )}

        {!loading && (
          <>
            {/* Reviews Summary */}
            {reviews.length > 0 && (
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <StarRating rating={Math.round(averageRating)} size="large" />
                  <span className="text-2xl font-bold text-gray-900">
                    {averageRating.toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-600">
                  Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Review Submission Form */}
            {allowSubmission && (
              <div className="mb-12">
                <ReviewForm serviceName={serviceName} onSubmit={saveReview} />
              </div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.length > 0 ? (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Customer Reviews
                  </h3>
                  <div className="grid gap-6">
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No reviews yet. Be the first to share your experience!
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading reviews...</p>
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
};

export default Reviews;
