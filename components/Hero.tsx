import Button from "./Button";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Businesses with AI</h1>
      <p className="text-gray-600 mb-6">
        Smart, scalable, and efficient products for the modern world.
      </p>
      <Button>Get Started</Button>
    </section>
  );
}
