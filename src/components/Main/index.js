import style from "./Main.module.css";

    function Main () {
        return (
            <>
               <main className={style.main}>
                        <h1 className={style.h1_great}>Great</h1>
                    <div className={style.description} >
                        <p>You scored higher than 65% of </p>
                        <p className={style.p_ajustes}> <span className={style.p_ajustes_mobile }>the</span> people who have taken </p>
                        <p className={style.p_ajustes2}>these tests.</p>
                    </div>
                </main>
            </>
        );
    }  

export default Main;   
