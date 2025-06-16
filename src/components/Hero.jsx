import heroImage from '../assets/pexels-kseverin-1542252.jpg'; // Replace with actual image name in /assets

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Campus Meals, Delivered Fast.</h1>
        <p>Order from your favorite campus restaurants and get your food delivered in minutes.</p>
        <button className="order-button">Order Now</button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Delivery illustration" />
      </div>
    </section>
  );
};

export default Hero;
