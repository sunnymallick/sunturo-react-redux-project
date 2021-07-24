import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editReview } from "../../store/review";


const EditReviewForm = ({ reviewId, hideForm }) => {
    const currentReview = useSelector((state) => state.reviews[id])

    const [review, setReview] = useState(currentReview.review)
    const [rating, setRating] = useState(currentReview.rating)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            ...currentReview,
            review,
            rating
        };

        let updated = await dispatchEvent(editReview(payload));

        if(updatedItem) {
            hideForm();
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <section className='editForm'>
            <form onSubmit={handleSubmit}>
            <textarea
            type='text'
            placeholder='leave a review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
            <button type='submit'>Update Comment</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
        </form>

        </section>
    )

}


export default EditReviewForm
