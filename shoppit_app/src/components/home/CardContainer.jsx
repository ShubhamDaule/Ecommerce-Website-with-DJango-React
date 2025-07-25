import HomeCard from './HomeCard';

const CardContainer = () => {
  return (
    <section className="py-5" id="shop">
        <h4 style={{textAlign: "center"}}>Our Products</h4>

        <div className="container px-4 px-lg-5 mt-5">
            <div className="row justify-content-center">
              <HomeCard />
              <HomeCard />
              <HomeCard />
              <HomeCard />
            </div>  
        </div>
    </section>
  )
}

export default CardContainer