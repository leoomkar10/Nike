import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import {shoe8} from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg-max-w-lg">
          We Provide You
          <span className='text-coral-red'> Super </span><br />
          <span className='text-coral-red'>Quality </span> Shoes     
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Nike products offer you unparalleled comfort, cutting-edge technology, and stylish designs.</p>
          <p className="mt-4 lg:max-w-lg info-text">Empower your athletic performance and express your unique style with our innovative footwear, apparel, and gear. Elevate your game today..</p>
          <div className="mt-11 ">
          <Button label="View Details" iconURL={arrowRight}/>
          </div>
          
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" 
         width={570}
         height={522}
         className="object-contain"
        />

      </div>

    </section>
  )
}

export default SuperQuality