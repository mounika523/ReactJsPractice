import styles from './Product-item.module.css'

function Buttoncomponent(){
    return (<button className={styles.buttonstyle}>Click</button>);
}
function Productitem({singleProduct, key}){
    return(
        <div style={{padding:'20px', border:"2px solid red"}}key = {key}>
            <p className={styles.productTitle}>{singleProduct}</p>
            <Buttoncomponent/>
        </div>
    )
}

export default Productitem;