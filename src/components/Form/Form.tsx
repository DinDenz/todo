import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  name: string;
  age: number;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<MyForm>({
    defaultValues: {
      age: 18
    }
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
    reset({
      age: 18,
      name: ""
    });
  };
  /* const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
    reset();
  }; */
  const handleResetForm = () => {
    reset({
      age: 0,
      name: ""
    });
  };
  const handleSetNameInForm = () => {
    setValue("name", "Petya");
  };

  /* function* iter (n=10) {
    for (let i=0; i < n; i++) {
        yield i
    }
  }
  for (let k of iter(5)) {
    console.log(k);
  } */ // опыт с генератором


  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("name", { required: "Поле обязательно к заполнению" })}
      />
      {errors?.name && <span>{errors?.name?.message || "Ошибка"}</span>}
      <br />
      <input
        type="number"
        {...register("age", { required: "Это поле тоже обязательно)" })}
      />
      {errors?.age && <span>{errors?.age?.message || "Ошибка"}</span>}
      <br />
      <button type="submit">Отправить</button>
      <button type="button" onClick={handleResetForm}>
        Очистить
      </button>
      <button type="button" onClick={handleSetNameInForm}>
        Установить имя Петя
      </button>
      {watch('age')}
    </form>
  );
};

export default Form;
