import React from "react";

const Step = ({ step, formData, nextStep, prevStep, handleChange, submitForm }) => {
  return (
    <div className=" w-[40%] mx-auto mt-40 rounded-sm bg-gray-500">
      {step === 1 && (
        <div>
          <h1 className="text-center my-5 p-2">Customer Details</h1>
          <div className="flex flex-col justify-center item-center  p-3 [&>*]:p-2 [&>*]:outline-none">
            <label>First Name:</label>
            <input
              id="first_name"
              className="border border-black"
              type="text"
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Last Name:</label>
            <input id="last_name" className="border border-black"
             type="text" 
             value={formData.last_name}
             onChange={handleChange}
             />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-center my-5 p-2">Car Details</h1>
          <div className="flex flex-col justify-center item-center  p-3 [&>*]:p-2 [&>*]:outline-none">
            <label>Brand:</label>
            <input
              id="model"
              className="border border-black"
              type="text"
              value={formData.model}
              onChange={handleChange}
            />
            <label>Model:</label>
            <input id="car_price" className="border border-black" type="text" 
            value={formData.car_price}
            onChange={handleChange}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1 className="text-center my-5 p-2">Payment Details</h1>
          <div className="flex flex-col justify-center item-center  p-3 [&>*]:p-2 [&>*]:outline-none">
            <label>Cradit Card Number:</label>
            <input
              id="card_info"
              className="border border-black"
              type="text"
              value={formData.card_info}
              onChange={handleChange}
            />
            <label>Expiration Date:</label>
            <input id="expiry_date" className="border border-black" type="date" 
             value={formData.expiry_date}
             onChange={handleChange}
            />
          </div>
        </div>
      )}

      {/* button using steps */}
      <div className="flex justify-between p-5 ">
        <div>
          {step > 1 && (
            <button
              className="bg-green-400 min-w-30 rounded p-2 cursor-pointer"
              onClick={prevStep}
            >
              previous
            </button>
          )}
        </div>
        {step < 3 ? (
         
          <button
          className="bg-green-400 min-w-30 rounded p-2 cursor-pointer"
          onClick={nextStep}
        >
          next
        </button>
        ) : (
            <button
            className="bg-green-400 min-w-30 rounded p-2 cursor-pointer"
            onClick={submitForm}
          >
            submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
