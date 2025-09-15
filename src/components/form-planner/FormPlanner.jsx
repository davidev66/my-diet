const FormPlanner = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl my-6 p-6 bg-white rounded-lg shadow space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Meal Planner
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Track your meals and daily macros
        </p>

        {/* Nutrition summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Calories</p>
            <p className="text-xl font-bold text-gray-800">2200 / 2500</p>
            <p className="text-xs text-green-600">Within goal</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Protein</p>
            <p className="text-xl font-bold text-gray-800">120g</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Carbs</p>
            <p className="text-xl font-bold text-gray-800">250g</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Fats</p>
            <p className="text-xl font-bold text-gray-800">70g</p>
          </div>
        </div>

        {/* Meals */}
        {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
          <div
            key={meal}
            className="border border-gray-200 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">{meal}</h2>
              <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-3 py-1 rounded">
                + Add option
              </button>
            </div>

            {/* Meal Options */}
            <div className="space-y-3">
              {[1].map(option => (
                <div
                  key={option}
                  className="border border-gray-200 rounded-md p-3 space-y-3 bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">
                      Option {option}
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200">
                        Edit
                      </button>
                      <button className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200">
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Foods in option */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="text-gray-500 text-xs border-b">
                          <th className="text-left py-1">Food</th>
                          <th className="text-right py-1">Protein</th>
                          <th className="text-right py-1">Carbs</th>
                          <th className="text-right py-1">Fat</th>
                          <th className="text-right py-1">Calories</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Eggs', p: 12, c: 1, f: 10, cal: 150 },
                          { name: 'Oats', p: 5, c: 27, f: 3, cal: 150 },
                        ].map((food, idx) => (
                          <tr key={idx} className="border-b">
                            <td className="py-1">{food.name}</td>
                            <td className="text-right">{food.p}g</td>
                            <td className="text-right">{food.c}g</td>
                            <td className="text-right">{food.f}g</td>
                            <td className="text-right">{food.cal}</td>
                            <td className="text-right">
                              <button className="text-xs px-2 py-0.5 rounded bg-red-50 text-red-700 hover:bg-red-100">
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button className="mt-2 text-xs px-3 py-1 rounded bg-teal-50 text-teal-700 hover:bg-teal-100">
                    + Add food
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPlanner;
