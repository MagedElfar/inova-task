import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Review.module.css";


const Review = ({rate}) => {
    const list = [];


    for(let i = 1 ; i<= 5 ; i++){
        if(rate >= i){
            list.push(<div className={`d-flex align-items-center ${style.star}`}  key = {i}>
                <FontAwesomeIcon icon = {starSolid} />
            </div>)
        } else{
            list.push(<div className="d-flex align-items-center"  key = {i}>
                <FontAwesomeIcon icon={faStar} />
            </div>)
        }
    }    

    return (
        <div className={`d-flex ${style.review}`}>
            {list}
        </div>
    )
}

export default Review
