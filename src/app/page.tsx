"use client";

import Input from "@/components/Input";
import { useEffect, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    input_numbers: "",
    target: 0
  });

  const [result, setResult] = useState("");

  const [error, setError] = useState(false);

  const findNumbers = () => {
    if (form.input_numbers === "" || form.target === 0) {
      setError(true);
      return;
    }

    const numbers = form.input_numbers.split(",").map(Number);
    let flag = 0;

    while (flag < numbers.length) {
      for (let i = flag + 1; i < numbers.length; i++) {
        if (numbers[flag] + numbers[i] === form.target) {
          setResult("[" + flag + "," + i + "]");
          return;
        }
      }
      flag++;
    }

    setResult("Target not found.");

    console.log(numbers);
  };

  useEffect(() => {
    setError(false);
  }, [form]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 p-10 lg:p-24'>
      <div className='text-center'>
        <h1 className='font-bold text-2xl'>TWO SUMS</h1>
        <p className='tracking-tight'>
          Finding your desired output in array of numbers.
        </p>
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <label>
          Please input collection of numbers.
          <br />
          (seperated by commas ,)
        </label>

        <Input
          onChange={(e) => setForm({ ...form, input_numbers: e.target.value })}
          value={form.input_numbers}
          type={"text"}
          numbersOnly
        />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <label>Please input your target output.</label>

        <Input
          onChange={(e) => setForm({ ...form, target: Number(e.target.value) })}
          value={form.target === 0 ? "" : form.target}
          type={"text"}
          numbersOnly
        />
      </div>

      <div className='flex justify-between items-center w-full flex-col lg:flex-row gap-4'>
        <div className='flex items-center w-full justify-between lg:w-auto lg:gap-4'>
          <button
            onClick={() => findNumbers()}
            className='border border-white px-8 py-3 rounded-md'
          >
            Run!
          </button>

          <button
            onClick={() => {
              setForm({
                input_numbers: "",
                target: 0
              });
              setResult("");
            }}
            className='border border-red-500 text-red-500 px-8 py-3 rounded-md'
          >
            Reset
          </button>
        </div>

        <div className='self-start lg:self-auto'>
          {result && (
            <h1 className='font-bold text-2xl tracking-wide'>
              Result: {result}
            </h1>
          )}
        </div>
      </div>

      <div className='h-20'>
        {error && (
          <h1 className='font-bold text-2xl text-red-500'>Missing Input!!</h1>
        )}
      </div>
    </main>
  );
}
