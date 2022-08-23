import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="bg-white p-5 max-w-7xl mx-auto px-4 md:px-20">
      <div className="heading">
        <h2 className="pb-4 pt-2 md:pt-8 coffee-trust text-4xl md:text-7xl xl:text-7xl font-tan-nimbus text-black font-bold tracking-tight leading-tighter">
          Testimonials
        </h2>
        <hr />
      </div>
      <div className="testimonials grid grid-cols-1 md:grid-cols-3 pt-6 md:pt-12 gap-4">
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
