import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSingleSpotData } from "../../../store/spots";

function UserSpotCard({ spot }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/spots/${spot.id}/edit`);
  }

  const deleteSpot = (spotId) => {
    
  }

  return (
    <>
      <Link 
        to={`/spots/${spot.id}`}
      >
        <div className="image-container">
          <img 
            src={spot.previewImage} 
            alt="preview-image"
            className="preview-image" 
          />
        </div>
        <div className="spot-description">
          <div className="location-text-and-stars">
            <div className="location-text bold">{spot.city}, {spot.state}</div>
            <div className="stars">
              {spot.avgRating ? '★' + Number(spot.avgRating).toFixed(1) : '★New'}
            </div>
          </div>
          <div className="price-manage">
            <div className="price">
              <span className="bold price-component">${Math.trunc(spot.price)}</span>
              <span className="light price-component">night</span>
            </div>
            <div className="manage-buttons">
              <button 
                className="update-button"
                onClick={redirectToUpdate}
              >
                Update
              </button>
              <button 
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default UserSpotCard;
