import style from "./Circle.module.css";

function Circle () {
    return (
        <circle className={style.circle} >
         <div>
           <p className={style.circle_p}>
            <span className={style.seven_six}>76</span> <br/>
               <span className={style.circle_center_position}> of 100 </span>
           </p>
           </div>  
        </circle>
    );
}
 
export default Circle;  