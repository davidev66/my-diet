const FormCalculator = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg my-6 p-4 bg-white rounded-lg shadow">
        <h1 className="text-xl font-bold text-center text-gray-800">
          Calorie Calculator
        </h1>
        <p className="text-center text-gray-500 text-sm mb-4">
          Harris-Benedict equation
        </p>

        <form className="grid grid-cols-2 gap-4 text-sm">
          <div className="col-span-2">
            <label className="block font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sex"
                  className="text-teal-600 focus:ring-teal-500"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sex"
                  className="text-teal-600 focus:ring-teal-500"
                />
                Female
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="age"
              className="block font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="25"
            />
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block font-medium text-gray-700 mb-1"
            >
              Weight (kg)
            </label>
            <input
              id="weight"
              type="number"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="70"
            />
          </div>

          <div>
            <label
              htmlFor="height"
              className="block font-medium text-gray-700 mb-1"
            >
              Height (cm)
            </label>
            <input
              id="height"
              type="number"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="175"
            />
          </div>

          <div>
            <label
              htmlFor="activity"
              className="block font-medium text-gray-700 mb-1"
            >
              Activity level
            </label>
            <select
              id="activity"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">—</option>
              <option value="1.2">Sedentary</option>
              <option value="1.375">Light</option>
              <option value="1.55">Moderate</option>
              <option value="1.725">Active</option>
              <option value="1.9">Very active</option>
            </select>
          </div>

          <div className="col-span-2">
            <button
              type="button"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md px-3 py-2 transition text-sm"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCalculator;
