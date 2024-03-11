const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] md:mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convinience on-demand
          </h1>
          <p className=" px-1  w-96 max-w-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            corporis, laudantium assumenda quisquam odio sint. Ut, corrupti
            tenetur necessitatibus, autem recusandae fuga explicabo
            voluptatibus, provident voluptas mollitia in consequuntur fugit.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium  py-3 my-6 md:mx-auto ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
