import React, { useEffect } from "react";
import { X } from "react-feather";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import supabase from "@/config/supabaseClient";

// Define the validation schema
const schema = yup.object({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone_number: yup.string().length(10, "Phone number must be exactly 10 digits").required("Phone number is required"),
  image: yup.string().url("Invalid URL format").nullable(),
});

const Modal = ({ isOpen, onClose, updatedData, reloadData }) => {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_number: "",
      image: "",
    },
  });

  useEffect(() => {
    if (updatedData) {
      // Set form values when updatedData is available
      Object.keys(updatedData).forEach(key => {
        setValue(key, updatedData[key]);
      });
    } else {
      reset();
    }
  }, [updatedData, setValue, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      if (updatedData) {
        const { data: updateData, error } = await supabase
          .from("school-data")
          .update(data)
          .eq("id", updatedData.id);

        if (error) {
          throw new Error(`Error updating data: ${error.message}`);
        } else {
          console.log("Data updated:", updateData);
          reloadData();
          reset();
          onClose();
        }
      } else {
        const { data: insertData, error } = await supabase
          .from("school-data")
          .insert([data]);

        if (error) {
          throw new Error(`Error inserting data: ${error.message}`);
        } else {
          console.log("Data inserted:", insertData);
          reloadData();
          reset();
          onClose();
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white py-3 px-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600  transition-colors duration-200"
        >
          <X size={30} className="bg-gray-200 rounded-full p-2 hover:bg-gray-900 hover:text-white" />
        </button>
        <h3 className="text-3xl font-semibold mb-6 text-center">
          {updatedData ? "Edit School Record" : "Add School Record"}
        </h3>
        <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                {...register("first_name")}
                placeholder="First Name"
                className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${errors.first_name ? 'border-red-500' : ''}`}
              />
              {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                {...register("last_name")}
                placeholder="Last Name"
                className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${errors.last_name ? 'border-red-500' : ''}`}
              />
              {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                {...register("address")}
                placeholder="Address"
                className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${errors.address ? 'border-red-500' : ''}`}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                {...register("phone_number")}
                placeholder="Contact number"
                className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${errors.phone_number ? 'border-red-500' : ''}`}
              />
              {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                {...register("image")}
                placeholder="Image URL"
                className={`p-3 border border-gray-300 rounded-lg ${errors.image ? 'border-red-500' : ''}`}
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg w-full hover:bg-zinc-600 transition-colors duration-300"
            >
              {updatedData ? "Update Details" : "Add Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
