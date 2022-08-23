const Testimonial = () => {
  return (
    <div className="testimonial relative flex flex-col justify-center items-center bg-neutral-200">
      <div className="banner h-36 w-full">
        <img
          src="/testimonials.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="avatar h-36 w-36 absolute top-10">
        <img
          src="https://medina.dev/me.jpg"
          className="h-full w-full rounded-full border-4 border-white"
          alt=""
        />
      </div>
      <div className="p-4 pt-10">
        <div className="quote">
          <p className="text-lg md:text-2xl font-space-grotesk text-neutral-700 text-justify">
            "I love the way you make your coffee. It's so good and I can't stop
            myself from ordering more!"
          </p>
          <p className="w-full text-right pt-4">
            <span className="text-black font-light text-right text-sm uppercase font-space-grotesk">
              John Doe
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
