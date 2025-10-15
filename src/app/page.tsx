import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Hero />  {/* Hero section */}

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Fast Performance" description="Lightning fast product." image="https://source.unsplash.com/400x300/?technology" />
          <Card title="Secure" description="Top-notch security." image="https://source.unsplash.com/400x300/?security" />
          <Card title="Easy to Use" description="Simple and intuitive." image="https://source.unsplash.com/400x300/?interface" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="John Doe" description="Amazing product! Increased our productivity." />
          <Card title="Jane Smith" description="Easy to use and very efficient." />
          <Card title="Alice Johnson" description="Highly recommend to anyone looking for AI solutions." />
        </div>
      </section>
    </>
  );
}
