const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center py-20 bg-amber-100 px-4">
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

      {/* Benefits */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12">
            Why choose MyDietApp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold mb-2">⏳ Save time</h3>
              <p className="text-sm text-gray-600">
                Quickly organize your meals and avoid last-minute stress.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold mb-2">🥗 Balanced meals</h3>
              <p className="text-sm text-gray-600">
                Get clear and simple guidance for healthier eating.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold mb-2">📲 All in one place</h3>
              <p className="text-sm text-gray-600">
                Access your plans anytime, anywhere, on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12">How does it work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-bold mb-2">Create your profile</h3>
              <p className="text-sm text-gray-600">
                Add your preferences and goals to personalize your plan.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-bold mb-2">Set your goals</h3>
              <p className="text-sm text-gray-600">
                Define what you want to achieve with your diet.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-bold mb-2">Get your plan</h3>
              <p className="text-sm text-gray-600">
                Access a clear plan to follow, adapted to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center py-20 bg-red-500 text-white px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to simplify your diet?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Start today and take control of your meals with MyDietApp.
        </p>
        <button className="px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow hover:bg-gray-100">
          Get started
        </button>
      </section>
    </div>
  );
};

export default Home;
