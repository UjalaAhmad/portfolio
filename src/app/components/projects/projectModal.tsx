import Image from "next/image";
import Slider from "react-slick";

const Modal = ({ close, projects }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    scroll:false,
    
  };

  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={close}></div>

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="rounded-xl p-6 w-5/6 lg:w-4/5 lg:h-[80%] h-[40%] overflow-y-auto relative shadow-xl  bg-gray-100">
          <button
            onClick={close}
            className="absolute top-2 right-3 text-black text-2xl font-bold"
          >
            ×
          </button>

          {/* Carousel for each project */}
          {projects.map((item: any) => (
            <div key={item.id} className="mt-10">
              <Slider {...settings}>
                {item.image.map((it: any, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      src={it.pic}
                      alt="project"
                      width={800}
                   
                      className="rounded-xl mx-auto h-[80%] "
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
