"use client";

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
import { useState } from "react";
import { Textarea } from "./ui/textarea";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { takedownReasons } from "@/constants/data";
import axios from "axios";
import CopyButton from "./ui/CopyButton";

const TakedownForm = () => {
  const [infringingContent, setInfringingContent] = useState("");
  const [brandContent, setBrandContent] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [generatedNotice, setGeneratedNotice] = useState("");

  const handleGenerateNotice = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();

    const noticeData = {
      infringingContent,
      brandContent,
      selectedReason,
      detailedDescription,
    };

    console.log("Generated Notice Data:", noticeData);

    try {
      const response = await axios.get(
        "https://r1shabh.pythonanywhere.com/api/takedown",
        {
          params: noticeData,
        }
      );

      console.log(response.data);
      setGeneratedNotice(response.data.notice);
    } catch (error: any) {
      console.error(
        "Error fetching domain details:",
        error.response?.data || error.message
      );
    }
  };

  const downloadNoticeTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedNotice], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "notice.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <form className="mt-4 px-2">
        <div className="grid items-center w-full gap-6">
          <div className="flex sm:flex-row flex-col gap-8">
            <div className="basis-1/2">
              <Label htmlFor="name">Infringing Content</Label>
              <Input
                id="name"
                placeholder="http://www.website-that-stole-your-content.com"
                value={infringingContent}
                onChange={(e) => setInfringingContent(e.target.value)}
              />
            </div>

            <div className="basis-1/2">
              <Label htmlFor="name">Brand Content</Label>
              <Input
                id="name"
                placeholder="http://www.website-from-where-data-is-stolen.com"
                value={brandContent}
                onChange={(e) => setBrandContent(e.target.value)}
              />
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="framework" className="mb-1.5">
              Select the reason for infringement
            </Label>
            <Select
              value={selectedReason}
              onValueChange={(value) => setSelectedReason(value)}
            >
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
              value={detailedDescription}
              onChange={(e) => setDetailedDescription(e.target.value)}
            />
            <div className="flex justify-between">
              <Button onClick={handleGenerateNotice}>Generate Notice</Button>

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
              value={generatedNotice}
              onChange={(e) => setGeneratedNotice(e.target.value)}
            />
            <div className="flex justify-between">
              <Button
                className="bg-[#e11318] hover:bg-[#E51015] text-white font-semibold"
                onClick={downloadNoticeTxtFile}
              >
                Download Notice
              </Button>

              <CopyButton textToBeCopied={generatedNotice} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TakedownForm;
