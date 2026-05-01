import React from "react";
import { useForm } from "react-hook-form";

const SendPercel = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleSendPercel = (data) => {
        console.log(data);
    }

  return (
    <div className="my-8 bg-base-100 rounded-2xl p-5">
      <h2 className="text-5xl font-extrabold">Send Percel</h2>

      <form onSubmit={handleSubmit(handleSendPercel)} className="my-5">
        {/* document */}
        <div>

        </div>

        {/* percel info: name, weight */}
        <div>

        </div>

        {/* two columns */}
        <div>
            {/* sender info */}
            <div>

            </div>

            {/* receiver info */}
            <div>

            </div>
        </div>


      </form>
    </div>
  );
};

export default SendPercel;
