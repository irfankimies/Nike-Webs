const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)    
    }
  }

  return (
    <div
      className={`border rounded-xl duration-500
    ${
      bigShoeImg === imgURL.bigShoe ? "shadow-coral-red" : "border-transparent"
    } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center border-none">
        <img
          src={imgURL.thumbnail}
          alt="shoe collector"
          width={127}
          height={103}
          className="object-contain m-2"
        />
      </div>
    </div>
  );
};

export default ShoeCard