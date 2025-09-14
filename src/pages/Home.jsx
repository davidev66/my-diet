const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Your diet made easier than ever
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Plan your meals, organize your menus, and reach your goals without
          complications.
        </p>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
          Learn more
        </button>
      </section>
    </>
  );
};

export default Home;
