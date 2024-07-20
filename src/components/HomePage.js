"use client";
import supabase from "@/config/supabaseClient";
import Modal from "@/pages/Modal";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schoolRecord, setSchoolRecord] = useState();
  const [updatedData, setUpdatedData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("school-data").select();

    if (error) {
      setSchoolRecord(null);
      console.log("error");
    }

    if (data) {
      setSchoolRecord(data);
    }
  };

  const handleOpenModal = () => {
    setUpdatedData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleEdit = (data, index) => {
    setUpdatedData(data);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("school-data").delete().eq("id", id);

    if (error) {
      console.error("Error deleting data:", error);
    } else {
      setSchoolRecord(schoolRecord.filter((data) => data.id !== id));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="h-screen bg-gradient-to-b from-[#1d2627] to-[#201c25] py-12">
        <h3 className="text-center text-4xl text-white font-bold">School data here</h3>
      <div className="mx-auto max-w-5xl  flex justify-end gap-32">
      
        <button
          onClick={handleOpenModal}
          className="border text-white font-bold p-3 rounded-xl hover:duration-300 hover:text-white hover:bg-zinc-600"
        >
          Add Data Here
        </button>
      </div>
      <div className="container mx-auto flex flex-wrap items-center justify-center text-white">
        {schoolRecord && (
          <div className="my-1 p-4  rounded-lg w-full max-w-5xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              {schoolRecord.map((data, index) => (
                <div
                  key={index}
                  className="p-1 border border-gray-200 rounded-lg"
                >
                  {data.image && (
                    <div>
                      <Image
                        src={data.image}
                        width={100}
                        height={100}
                        alt="Uploaded"
                        className="w-full h-fit object-cover rounded-lg"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 100px"
                      />
                    </div>
                  )}
                  <div className="px-3 py-3">
                    <h3 className="text-sm font-bold">
                      {data.first_name} {data.last_name}
                    </h3>
                    <h3 className="text-xs"> Email - {data.email}</h3>
                    <h3 className="text-xs"> Address - {data.address}</h3>
                    <h3 className="text-xs">Phone number - {data.phone_number}</h3>
                  </div>
                  <div className="flex gap-2 p-3 ">
                    <button
                      onClick={() => handleEdit(data, index)}
                      className="border rounded-md p-2 text-xs hover:bg-yellow-300 duration-200 "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="border p-2 rounded-md text-xs hover:bg-red-500 duration-200 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        updatedData={updatedData}
        reloadData={fetchData}
      />
    </section>
  );
};

export default HomePage;
