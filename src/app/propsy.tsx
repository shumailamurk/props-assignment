

const Propsy = (props :any) => {
    return (
     <div className="flex justify-center items-center h-screen">
     <div className= "text-[#5f1c4e] text-xl font-serif bg-pink-300 h-60 w-60 text-center px-10 py-9 border-x-4 border-pink-600 border-y-4 ">
     
        <h1>Favourite Name: {props.favname}</h1>
        <h2>Favourite Dish: {props.favdish}</h2>
        <h2>Favourite Colour: {props.favcolor}</h2>
      </div>
      </div>
    );
  };
  
  export default Propsy;
  