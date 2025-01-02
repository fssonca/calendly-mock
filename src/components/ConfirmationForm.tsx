import React, { FormEvent, useState } from "react";
import EmailChipsInput from "./EmailChipsInput";

const ConfirmationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guestEmails, setGuestEmails] = useState<string[]>([]);
  const [showGuests, setShowGuests] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 w-full flex flex-col items-start text-black max-w-[400px] box-content">
      <h2 className="font-bold text-lg mb-4">Enter Details</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col items-start">
          <label className="block text-sm font-bold" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            className="border border-[#a6bbd1] h-12 focus:border-blue-600 focus:border-2 focus:outline-none rounded-lg p-2 w-full mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col items-start mt-4">
          <label className="block text-sm font-bold" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className="border border-[#a6bbd1] h-12 focus:border-blue-600 focus:border-2 focus:outline-none rounded-lg p-2 w-full mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col items-start mt-4">
          {showGuests ? (
            <>
              <label className="block text-sm font-bold mb-1">
                Guest Email(s)
              </label>

              <EmailChipsInput
                emails={guestEmails}
                setEmails={setGuestEmails}
                maxEmails={10}
              />
              <div className="mt-2 text-left text-xs mt-4">
                Notify up to 10 additional guests of the scheduled event.
              </div>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setShowGuests(true)}
              className="bg-white text-blue-700 border border-blue-700 px-4 py-2 -mt-1 rounded-full hover:bg-blue-100 text-xs"
            >
              Add Guests
            </button>
          )}
        </div>

        <div className="mt-2 text-left text-xs mt-7">
          By proceeding, you confirm that you have read and agree to{" "}
          <span className="font-bold text-blue-700">
            Calendly's Terms of Use
          </span>{" "}
          and <span className="font-bold text-blue-700">Privacy Notice</span>.
        </div>

        <div className="flex flex-col items-start mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 font-bold text-sm"
          >
            Schedule Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationForm;
