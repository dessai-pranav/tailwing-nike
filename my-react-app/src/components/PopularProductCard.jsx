import {star} from "../nike_landing_assets/assets/icons/index.js";


const PopularProductsCard =  ({imgURL,name ,price })=> {
    return (
        <div className = " flex  flex-col w-full max-sm:w-full" >
            <img
                src = {imgURL} alt={name}
                className = "w-[280px] h-[280px]"/>
            <div className = "mt-8 flex justify-start gap-2.5">
                <img src={star} alt = "rating" width ={24} height={24}/>
                <p className= "font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className= " text-2xl leading-normal font-semibold font palanquin">{name}</h3>
            <p className="mt-2  font-semibold font-montserrat leading-normal font-2xl ">{price}</p>
        </div>
    )
}
export default PopularProductsCard
