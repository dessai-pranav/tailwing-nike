import Hero from "./section/Hero.jsx";
import SpecialOffer from "./section/SpecialOffer.jsx";
import PopularProducts from "./section/PopularProducts.jsx";
import Footer from "./section/Footer.jsx";
import CustomerReviews from "./section/CustomerReviews.jsx";
import Services from "./section/Services.jsx";
import Subscribe from "./section/Subscribe.jsx";
import SuperQuality from "./section/SuperQuality.jsx";
import  Nav from "./components/Nav.jsx";



const App = () => (

       <main className= "realtive">
           <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>
           <section className= " padding">
               <PopularProducts/>
           </section>
           <section className= " padding">
               <SuperQuality/>
           </section>
           <section className= " padding-x py-10">
               <Services/>
           </section>
           <section className= " padding">
               <SpecialOffer/>
           </section>
           <section className= " bg-pale-blue padding">
               <CustomerReviews/>
           </section>
           <section className= " padding-x sm:py-32 py-16 w-full">
               <Subscribe/>
           </section>
           <section className= " padding bg-black padding-x padding-t pb-8">
              <Footer/>
           </section>
       </main>
)

export default App
