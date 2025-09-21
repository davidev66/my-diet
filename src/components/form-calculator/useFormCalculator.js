import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formCalculatorSchema } from '../../schemas/form-calculator-schema';
import { useState } from 'react';

export const useFormCalculator = () => {
  const [base, setBase] = useState(0);
  const [calculatedCal, setCalculatedCal] = useState(0);

  const form = useForm({
    defaultValues: {
      genre: 'male',
    },
    resolver: zodResolver(formCalculatorSchema),
  });

  // Calc basal metabolic rate (BMR)
  const handleCalculateBMR = data => {
    let BMR;

    if (data.genre === 'male') {
      BMR = 66.5 + 13.75 * data.weight + 5.003 * data.height - 6.75 * data.age;
    } else {
      BMR = 655.1 + 9.563 * data.weight + 1.85 * data.height - 4.676 * data.age;
    }
    return BMR;
  };

  const handleCalculateCal = (data, GET) => {
    const goalCal =
      data.goal === 'lose' ? GET - 500 : data.goal == 'gain' ? GET + 500 : GET;

    setCalculatedCal(goalCal);
  };

  const onSubmit = data => {
    const GET = Math.round(handleCalculateBMR(data) * data.activity);
    setBase(GET);

    handleCalculateCal(data, GET);
  };

  return { ...form, onSubmit, base, calculatedCal };
};
