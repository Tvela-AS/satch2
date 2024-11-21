"use client";
import axios from "axios";
import React, { useState } from "react";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
// import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/sanity/schemas/zod/schemas";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type ValidFormFields = "firstName" | "lastName" | "email" | "message";
type LabelProps = {
  children: React.ReactNode;
  className?: string;
};
const Label = ({ children, className = "md:text-xl" }: LabelProps) => {
  return <label className={className}>{children}</label>;
};
export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFormFields;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  className?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className = "md:min-w-full -bg-blue-200 text-xl",
}) => (
  <>
    <input
      className={`${className}`}
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <span className='error-message text-red-500'>{error.message}</span>
    )}
  </>
);

// type RegisterFormProps = {};
const RegisterForm = ({}) => {
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const customSubmit = async (vals: FormData) => {
    try {
      const response = await axios.post("/api/form", vals); // Make a POST request
      const { msg, errors = {} } = response.data; // Destructure the 'errors' property from the response data
      console.log(msg);
      const fieldErrorMapping: Record<string, ValidFormFields> = {
        email: "email",
        firstName: "firstName",
        lastName: "lastName",
        message: "message",
      };

      // Find the first field with an error in the response data
      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );

      // If a field with an error is found, update the form error state using setError
      if (fieldWithError) {
        // Use the ValidFieldNames type to ensure the correct field names
        setError(fieldErrorMapping[fieldWithError], {
          type: "server",
          message: errors[fieldWithError],
        });
      }
      setSuccessMessage(msg);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema), // Apply the zodResolver
  });
  return (
    <form onSubmit={handleSubmit(customSubmit)}>
      <div className='grid col-auto md:max-w-lg mx-auto -bg-white shadow-md rounded-lg p-6 space-y-4 -bg-blue-200 max-w-md md:min-w-full'>
        <h1 className='text-lg font-bold mb-4 text-center md:text-3xl'>
          {successMessage ? successMessage : "Hva kan jeg hjelpe med i dag?"}
        </h1>
        {!successMessage && (
          <>
            <Label>E-post:</Label>
            <FormField
              className='md:min-w-full -bg-blue-200 text-xl'
              type='email'
              placeholder='Email'
              name='email'
              register={register}
              error={errors.email}
            />

            <Label>Fornavn:</Label>
            <FormField
              type='text'
              placeholder='Fornavn'
              name='firstName'
              register={register}
              error={errors.firstName}
            />

            <Label>Etternavn:</Label>
            <FormField
              type='text'
              placeholder='Etternavn'
              name='lastName'
              register={register}
              error={errors.lastName}
            />

            <Label>Din beskjed:</Label>
            <FormField
              type='text'
              placeholder='din beskjed'
              name='message'
              register={register}
              error={errors.message}
            />

            <button
              // onClick={handleSubmit(onSubmit)}
              type='submit'
              className='submit-button w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-green-200 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-black md:text-xl'>
              Send melding
            </button>
          </>
        )}

        {/* <button
          type='submit'
          className='submit-button w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Hit me
        </button> */}
      </div>
    </form>
  );
};
export default RegisterForm;
