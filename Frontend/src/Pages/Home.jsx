export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Hello This is vishal</p>
              <h1>Welcome to my website</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                ducimus aut a mollitia reiciendis dolore sapiente accusamus
                dicta impedit quas, assumenda iure quaerat dolores itaque,
              </p>
              <div className="btn btn-group">
                <a className="home-btn" href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a className="home-btn" href="/service">
                  <button className="btn">Learn More</button>
                </a>
              </div>
            </div>
            {/* Images */}
            <div className="hero-image">
              <img
                src="/Image/TR00081.jpg"
                alt="Home-pic"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};