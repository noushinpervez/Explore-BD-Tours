import Image from "next/image";

const OfferCard = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-2.5 my-24">
      <div className="grid items-center lg:grid-cols-2 grid-cols-1 rounded-3xl overflow-hidden border border-border">

        {/* Image Section */ }
        <div>
          <Image
            src="https://images.unsplash.com/photo-1724057934866-369f97c064e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beautiful River"
            sizes="100vw"
            width={ 0 }
            height={ 0 }
            className="w-full h-[25vh] md:h-[50vh] object-cover"
          />
        </div>

        {/* Text Section */ }
        <div className="bg-bgCard flex flex-col h-full items-center justify-center md:py-20 md:px-28 py-12 px-2.5 text-center gap-5 mt-5 mb-10 md:m-0">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get special offers, and more from ERT
          </h2>
          <p className="text-link md:mx-12">
            Contact us to see secret deals prices drop the moment you sign up!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;