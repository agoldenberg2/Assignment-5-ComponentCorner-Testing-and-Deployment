import Hero from "../components/Hero";  


function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the latest tech products at great prices."
        callToAction="Shop Now"
      />
    

    <section className="home-intro">
        <h2>About ComponentCorner</h2>
        <p>
          At ComponentCorner, we are passionate about providing the best tech products to our customers. Our mission is to make technology accessible and affordable for everyone.
        </p>
      </section>
      </>
  );
}

export default HomePage;