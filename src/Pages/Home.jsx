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
                fugiat molestias libero, aperiam quae iusto quo. Qui ipsum
                possimus eaque, dolores, placeat beatae nihil ad ipsa obcaecati
                veritatis impedit architecto quam excepturi maiores saepe sint
                nesciunt repellendus! Nemo qui dolorem sint dolor perferendis
                ducimus debitis cum sed eligendi minima dolorum nam tempore
                omnis praesentium cupiditate iusto, error voluptas est
                reprehenderit recusandae? Molestiae ipsum quam libero voluptate
                inventore sapiente illum quisquam? Dignissimos commodi at cumque
                id repellat repellendus possimus distinctio delectus quaerat
                aspernatur. Accusantium, saepe!
              </p>
              <div className="btn btn-group">
                <a className='home-btn' href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a className='home-btn' href="/service">
                  <button className="btn">Learn More</button>
                </a>
              </div>
            </div>
{/* Images */}
            <div className="hero-image">
                <img src="/Image/TR00081.jpg" alt="Home-pic" width={400} height={400}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
