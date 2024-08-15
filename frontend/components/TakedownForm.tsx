import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CopyButton from "./ui/CopyButton";

const TakedownForm = () => {
  const takedownReasons = [
    {
      name: "Copyright infringement",
      id: "copyright-infringement",
    },
    {
      name: "Trademark infringement",
      id: "trademark-infringement",
    },
    {
      name: "Defamation or libel",
      id: "defamation-or-libel",
    },
    {
      name: "Privacy violations",
      id: "privacy-violations",
    },
    {
      name: "Malware or phishing activities",
      id: "malware-or-phishing-activities",
    },
    {
      name: "Violation of terms of service",
      id: "violation-of-terms-of-service",
    },
    {
      name: "Personal safety concerns",
      id: "personal-safety-concerns",
    },
    {
      name: "Other (specify)",
      id: "other",
    },
  ];
  return (
    <>
      <h1 className="flex gap-1 text-2xl font-semibold">
        <span className="text-[#E51015]">Takedown </span>Form
      </h1>
      <p className="text-sm font-medium">Enter takedown details</p>

      <form className="mt-4">
        <div className="grid items-center w-full gap-6">
          <div className="flex flex-row gap-8">
            <div className="basis-1/2">
              <Label htmlFor="name">Infringing Content</Label>
              <Input
                id="name"
                placeholder="http://www.website-that-stole-your-content.com"
              />
            </div>

            <div className="basis-1/2">
              <Label htmlFor="name">Brand Content</Label>
              <Input
                id="name"
                placeholder="http://www.website-from-where-data-is-stolen.com"
              />
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="framework" className="mb-1.5">
              Select the reason for infringement
            </Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                {takedownReasons.map((reason) => (
                  <SelectItem key={reason.id} value={reason.id}>
                    {reason.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="mb-1.5">
              Detailed description of the infringement that took place
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="leading-9 mb-1.5"
            />
            <div className="flex justify-between">
              <Button>Generate Notice</Button>

              <Dialog>
                <DialogTrigger>Need help?</DialogTrigger>
                <DialogContent className="max-w-xl">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <span className="font-semibold">Step 1:</span> Enter the
                      URL of the infringing content that you want to report.
                    </li>
                    <li>
                      <span className="font-semibold">Step 2:</span> Provide the
                      URL of your brand content that has been infringed.
                    </li>
                    <li>
                      <span className="font-semibold">Step 3:</span> Select the
                      reason for the infringement from the dropdown list.
                    </li>
                    <li>
                      <span className="font-semibold">Step 4:</span> Describe
                      the infringement in detail to provide more context.
                    </li>
                    <li>
                      <span className="font-semibold">Step 5:</span> Click
                      &quot;Generate Notice&quot; to create a takedown notice.
                    </li>
                    <li>
                      <span className="font-semibold">Step 6:</span> Review the
                      generated notice, then download or send it via email.
                    </li>
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="mb-1.5">
              Generated Notice
            </Label>
            <Textarea
              placeholder="Review your generated notice here"
              id="message"
              className="leading-9 mb-1.5"
            />
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Button className="bg-[#e11318] hover:bg-[#E51015] text-white font-semibold">
                  Download Notice
                </Button>
                <Button>Send e-mail</Button>
              </div>
              <CopyButton />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TakedownForm;
