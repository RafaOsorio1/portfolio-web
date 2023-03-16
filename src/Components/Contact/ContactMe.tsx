import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import '../Contact/form.css'

type formValues = {
  user: string;
  email: string;
  message: string;
};

export const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) =>
    console.log(data);
  return (
    <section className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name-user">Nombre</label>
        <input id="name-user" {...register("user",  {required: true, maxLength: 20})}  type="text" />
        <label htmlFor="email">Correo electronico</label>
        <input id="email" {...register('email')} type="text" />
        <label htmlFor="message">Mensaje</label>
        <input id="message" {...register('message')} type="text" />
        <input type="submit" />
      </form>
    </section>
  );
};
