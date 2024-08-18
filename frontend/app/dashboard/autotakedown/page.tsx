import TakedownForm from "@/components/TakedownForm";

const AutoTakedown = () => {
  return (
    <>
      <div className="px-2 py-6 sm:py-0">
        <h1 className="flex gap-1 text-2xl font-semibold">
          <span className="text-[#E51015]">Takedown </span>Form
        </h1>
        <p className="text-sm font-medium">Enter takedown details</p>
      </div>
      <TakedownForm />
    </>
  );
};

export default AutoTakedown;
