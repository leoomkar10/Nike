import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import {offer} from "../assets/images"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
    
    <div className="flex1">
      <img 
       src={offer}
       alt='Shoe Promotion'
       width={773}
       height={687}
       className="object-contain w-full"
    />

    </div>
    
    
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg-max-w-lg">
      <span className='text-coral-red'>Special </span> Offers  
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">Nike products offer you unparalleled comfort, cutting-edge technology, and stylish designs Lorem ipsum dolor sit amet..</p>
      <p className="mt-4 lg:max-w-lg info-text">Empower your athletic performance and express your unique style with our innovative footwear, apparel, and gear. Elevate your game today..</p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label="Shop Now" iconURL={arrowRight}/>
      <Button label="Learn More" backgroundColor="bg-white" bordercolor="border-slate-gray" textColor="text-slate-gray"/>
      </div>
    </div>  
    </section>
    
  )
}

export default SpecialOffers