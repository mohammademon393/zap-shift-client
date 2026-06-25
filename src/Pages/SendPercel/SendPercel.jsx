import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  // user auth data
  const { user } = useAuth();

  // use axios secure for backend communication
  const axiosSecure = useAxiosSecure();

  // load service centers data and extract unique regions for dropdown options
  const serviceCenters = useLoaderData();
  const regionsDuplicated = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicated)];

  // watch sender & receiver regions to update district options
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  // handle district selection
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((c) => c.district);
    return districts;
  };

  // handle send percel
  // Handle Send Parcel
  const handleSendPercel = (data) => {
    const isDocument = data.percelType === "document";
    const percelWeight = Number(data.percelWeight);
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    let cost = 0;

    // Document
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }

    // Non-Document
    else {
      if (percelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = percelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    // confirmation alert
    Swal.fire({
      title: "Agree with us?",
      text: `You will be charged ${cost} BDT for sending this percel.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed)
        // backend communication
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("After sending percel:", res.data);
        });

      // success alert message
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="my-8 bg-base-100 rounded-2xl p-5">
      <h2 className="text-5xl font-extrabold">Send Percel</h2>

      <form onSubmit={handleSubmit(handleSendPercel)} className="my-10 p-4">
        {/* percel type */}
        <div>
          <label className="label mr-5">
            <input
              type="radio"
              {...register("percelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register("percelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* percel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
          <fieldset className="fieldset">
            <label className="label">Percel Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Percel Name"
              {...register("percelName", {
                required: "Percel name is required",
              })}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Percel Weight (kg)</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Percel Weight"
              {...register("percelWeight", {
                required: "Percel weight is required",
              })}
            />
          </fieldset>
        </div>

        {/* two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* sender details */}
          <fieldset className="fieldset">
            <h2 className="text-2xl font-semibold">Sender Details</h2>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              className="input w-full mb-5"
              placeholder="Sender Name"
              {...register("senderName", {
                required: "Sender name is required",
              })}
            />

            {/* sender address */}
            <label className="label">Address</label>
            <input
              type="text"
              className="input w-full mb-5"
              placeholder="Sender Address"
              {...register("senderAddress", {
                required: "Sender address is required",
              })}
            />

            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              defaultValue={user?.email}
              type="email"
              className="input w-full mb-5"
              placeholder="Sender email"
              {...register("senderEmail", {
                required: "Sender email is required",
              })}
            />

            {/* sender phone number */}
            <label className="label">Sender Phone No</label>
            <input
              type="number"
              className="input w-full mb-5"
              placeholder="Sender Phone No"
              {...register("senderPhone", {
                required: "Sender phone number is required",
              })}
            />

            {/* sender regions */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a regions"
                className="select"
              >
                <option disabled={true}>Pick a regions</option>

                {regions.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>

                {districtsByRegion(senderRegion).map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender Pickup Instruction*/}
            <label className="label">Pickup Instruction</label>
            <textarea
              className="textarea w-full"
              placeholder="Sender Pickup Instruction"
              {...register("senderPickupInstruction", {
                required: "Sender pickup instruction is required",
              })}
            ></textarea>
          </fieldset>

          {/* receiver info */}
          <fieldset className="fieldset">
            <h2 className="text-2xl font-semibold">Receiver Details</h2>
            {/* receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              className="input w-full mb-5"
              placeholder="Receiver Name"
              {...register("receiverName", {
                required: "Receiver name is required",
              })}
            />

            {/* receiver address */}
            <label className="label">Address</label>
            <input
              type="text"
              className="input w-full mb-5"
              placeholder="Receiver Address"
              {...register("receiverAddress", {
                required: "Receiver address is required",
              })}
            />

            {/* receiver email */}
            <label className="label">Receiver Email</label>
            <input
              type="email"
              className="input w-full mb-5"
              placeholder="Receiver email"
              {...register("receiverEmail", {
                required: "Receiver email is required",
              })}
            />

            {/* receiver phone number */}
            <label className="label">Receiver Phone No</label>
            <input
              type="number"
              className="input w-full mb-5"
              placeholder="Receiver Phone No"
              {...register("receiverPhone", {
                required: "Receiver phone number is required",
              })}
            />

            {/* receiver regions */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a regions"
                className="select"
              >
                <option disabled={true}>Pick a regions</option>

                {regions.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a districts"
                className="select"
              >
                <option disabled={true}>Pick a districts</option>

                {districtsByRegion(receiverRegion).map((d, idx) => (
                  <option key={idx} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver Pickup Instruction*/}
            <label className="label">Pickup Instruction</label>
            <textarea
              className="textarea w-full"
              placeholder="Receiver Pickup Instruction"
              {...register("receiverPickupInstruction", {
                required: "Receiver pickup instruction is required",
              })}
            ></textarea>
          </fieldset>
        </div>

        {/* submit button */}
        <input
          type="submit"
          className="text-black btn btn-primary"
          value="Send Percel"
        />
      </form>
    </div>
  );
};

export default SendPercel;
