"use client";

import DomainDetail from "@/components/DomainDetail";
import DomainInput from "@/components/ui/domain-input";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";

const DomainTracer = () => {
  const [urlDetails, seturlDetails] = useState("");
  const [advanceUrlDetails, setAdvanceUrlDetails] = useState("");
  const [domain, setDomain] = useState<string>("");

  const handleDomainSubmit = async () => {
    if (!domain) {
      console.error("Domain is empty");
      return;
    }

    try {
      const response = await axios.get(
        "https://r1shabh.pythonanywhere.com/api/domain-search",
        {
          params: { domain },
        }
      );

      const resultURL = response.data.results[0].result;

      const advance_response = await axios.get(
        "https://r1shabh.pythonanywhere.com/api/advance-domain-search",
        {
          params: { resultURL },
        }
      );

      console.log("Domain details:", response.data);
      console.log("Advance domain details:", advance_response.data);
      seturlDetails(response.data);
      setAdvanceUrlDetails(advance_response.data);
    } catch (error: any) {
      console.error(
        "Error fetching domain details:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="px-2 py-6 sm:py-0">
      <h1 className="flex gap-1 text-2xl font-semibold">
        <span className="text-[#E51015]">Domain </span> Tracer
      </h1>

      <form className="flex w-full items-start gap-2 my-6">
        <DomainInput
          value={domain}
          onValueChange={setDomain}
          onSubmit={handleDomainSubmit}
        />
        <Tooltip showArrow content="Send message">
          <Button
            isIconOnly
            color={!domain ? "default" : "primary"}
            isDisabled={!domain}
            radius="lg"
            variant={!domain ? "flat" : "solid"}
            onClick={handleDomainSubmit}
          >
            <Icon
              className={cn(
                "[&>path]:stroke-[2px]",
                !domain ? "text-default-600" : "text-primary-foreground"
              )}
              icon="arcticons:emoji-arrow-pointing-rightwards-then-curving-downwards"
              width={20}
            />
          </Button>
        </Tooltip>
      </form>

      {urlDetails ? (
        <DomainDetail
          urlDetails={urlDetails}
          advanceUrlDetails={advanceUrlDetails}
        />
      ) : (
        <div>
          <h1>No data Found</h1>
        </div>
      )}
    </div>
  );
};

export default DomainTracer;
