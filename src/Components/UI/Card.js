import classes from "./Card.module.css";

const Card=(props)=>{
    return(
        <div key={props.Key} className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;