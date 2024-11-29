

const Propsy = (props :any) => {
    return (
    //  <div className="flex justify-center items-center h-screen">
    //  <div className= "text-[#5f1c4e] text-xl font-serif bg-pink-300 h-60 w-60 text-center px-10 py-9 border-x-4 border-pink-600 border-y-4 ">
     <div>
       <h1 className="font-sans text-xl text-[#227aa3] font-semibold">{props.favname}</h1>
       <h2 className="font-sans text-xl text-[#227aa3] font-semibold">{props.favcolour}</h2> 
       <h2 className="font-sans text-xl text-[#227aa3] font-semibold">{props.favdish}</h2> 
      </div>
      // </div>
    );
  };
  
  export default Propsy;
  