

const ShoeCard = ({imgURL, changeBigShoeImage,bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImg !==imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)

        }
    }
    return (
        <div className={` border-2 rounded-x1
        ${bigShoeImage===imgURL ? 'border-coral-red ' : 'border-transparent'} cursor-pointer max-sm:flex-1` }
        onClick={handleClick}>
            <div className='flex justify-center items-center bg-[url(/home/pranavgaunsdessai/Documents/tailwind/tailwing-nike/tailwing-nike/my-react-app/src/nike_landing_assets/assets/thumbnail-background.svg)] bg-center bg-cover bg-no-repeat sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img
                    src={imgURL.thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    )
}
export default ShoeCard
