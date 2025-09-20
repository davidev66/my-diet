import { useFormCalculator } from './useFormCalculator';
import { useWatch } from 'react-hook-form';

const FormCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    base,
    calculatedCal,
    control,
  } = useFormCalculator();

  const goal = useWatch({ control, name: 'goal' });

  const goalColors = {
    maintain: 'bg-green-50 border-green-200 text-green-700',
    gain: 'bg-blue-50 border-blue-200 text-blue-700',
    lose: 'bg-red-50 border-red-200 text-red-700',
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl my-6 p-6 bg-white rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 text-sm"
        >
          {/* form input gender */}
          <div className="col-span-2">
            <label className="block font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  {...register('genre')}
                  type="radio"
                  value="male"
                  className="text-teal-600 focus:ring-teal-500"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  {...register('genre')}
                  type="radio"
                  value="female"
                  className="text-teal-600 focus:ring-teal-500"
                />
                Female
              </label>
            </div>
          </div>

          {/* form input age */}
          <div>
            <label
              htmlFor="age"
              className="block font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              {...register('age')}
              id="age"
              type="number"
              min={0}
              max={150}
              maxLength={3}
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="25"
            />
          </div>

          {/* form input weight */}
          <div>
            <label
              htmlFor="weight"
              className="block font-medium text-gray-700 mb-1"
            >
              Weight (kg)
            </label>
            <input
              {...register('weight')}
              id="weight"
              type="number"
              min={0}
              max={400}
              maxLength={3}
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="70"
            />
          </div>

          {/* form input height */}
          <div>
            <label
              htmlFor="height"
              className="block font-medium text-gray-700 mb-1"
            >
              Height (cm)
            </label>
            <input
              {...register('height')}
              id="height"
              type="number"
              min={0}
              max={300}
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="175"
            />
          </div>

          {/* form input activity */}
          <div>
            <label
              htmlFor="activity"
              className="block font-medium text-gray-700 mb-1"
            >
              Activity level
            </label>
            <select
              {...register('activity')}
              id="activity"
              defaultValue=""
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="" disabled>
                Selecciona nivel de actividad
              </option>
              <option value="1.2">Sedentary</option>
              <option value="1.375">Light</option>
              <option value="1.55">Moderate</option>
              <option value="1.725">Active</option>
              <option value="1.9">Very active</option>
            </select>
          </div>

          {/* form input goal */}
          <div>
            <label
              htmlFor="goal"
              className="block font-medium text-gray-700 mb-1"
            >
              Goal
            </label>
            <select
              {...register('goal')}
              id="goal"
              defaultValue=""
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="" disabled>
                Select your goal
              </option>
              <option value="maintain">Maintain weight</option>
              <option value="lose">Lose weight</option>
              <option value="gain">Gain weight</option>
            </select>
          </div>

          {/* submit button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md px-3 py-2 transition text-sm"
            >
              Calculate
            </button>
          </div>

          {/* form errors */}
          <ul className="col-span-2 text-red-600 text-sm">
            {errors.age && <li>* {errors.age.message}</li>}
            {errors.height && <li>* {errors.height.message}</li>}
            {errors.weight && <li>* {errors.weight.message}</li>}
            {errors.activity && <li>* {errors.activity.message}</li>}
            {errors.goal && <li>* {errors.goal.message}</li>}
          </ul>
        </form>

        {/* results */}
        <div className="flex flex-col justify-center items-center border-t pt-6 md:border-t-0 md:border-l md:pl-6">
          <div className="w-full max-w-sm">
            {base === 0 && calculatedCal === 0 && (
              <div className="p-6 bg-gray-50 border border-dashed rounded-lg text-center shadow-sm">
                <p className="text-gray-500">
                  Fill the form and click Calculate
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Your BMR and calories for your goal will appear here
                </p>
              </div>
            )}

            {base > 0 && (
              <div className="p-4 bg-gray-50 border rounded-lg text-center shadow-sm mb-4">
                <p className="text-lg font-semibold text-gray-800">BMR</p>
                <p className="text-2xl text-teal-600 font-bold">{base} kcal</p>
              </div>
            )}

            {calculatedCal > 0 && (
              <div
                className={`p-4 border rounded-lg text-center shadow-sm ${
                  goalColors[goal] || 'bg-teal-50 border-teal-200 text-teal-700'
                }`}
              >
                <p className="text-lg font-semibold">Calories for your goal</p>
                <p className="text-2xl font-bold">{calculatedCal} kcal</p>
                <p className="text-sm mt-1 text-gray-600">
                  (based on your activity and selected goal)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCalculator;
