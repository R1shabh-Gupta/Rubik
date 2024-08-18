"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CopyButton from "@/components/ui/CopyButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectSeparator } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercaseAlphabets, setIncludeUppercaseAlphabets] =
    useState(true);
  const [includeLowercaseAlphabets, setIncludeLowercaseAlphabets] =
    useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [tags, setTags] = useState<string[]>([]);

  const handleReset = () => {
    console.log("handleReset");
    setPassword("");
    setIncludeNumbers(true);
    setIncludeUppercaseAlphabets(true);
    setIncludeLowercaseAlphabets(true);
    setIncludeSpecialChars(true);
    setPasswordLength(8);
  };

  const handleGeneratePassword = () => {
    const numberChars = "0123456789";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_+";

    let charset = "";
    let guaranteedChars = "";

    if (includeNumbers) {
      charset += numberChars;
      guaranteedChars += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      );
    }
    if (includeUppercaseAlphabets) {
      charset += uppercaseChars;
      guaranteedChars += uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
    }
    if (includeLowercaseAlphabets) {
      charset += lowercaseChars;
      guaranteedChars += lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
    }
    if (includeSpecialChars) {
      charset += specialChars;
      guaranteedChars += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
    }

    let password = guaranteedChars;
    const remainingLength = passwordLength - guaranteedChars.length;

    const cryptoRandom = (max: number) => {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    };

    for (let i = 0; i < remainingLength; i++) {
      password += charset.charAt(cryptoRandom(charset.length));
    }

    setPassword(
      password
        .split("")
        .sort(() => cryptoRandom(2) - 1)
        .join("")
    );

    setTags((prev) => [password, ...prev]);
  };

  const handleClear = () => {
    setTags([]);
  };

  return (
    <div className="px-2 py-6 sm:py-0">
      <h1 className="flex gap-1 text-2xl font-semibold">
        <span className="text-[#E51015]">Password </span> Generator
      </h1>

      <div className="flex gap-8 flex-wrap mt-8">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Password Generator</CardTitle>
            <CardDescription>
              Create a strong password for your project with just one click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    id="name"
                    placeholder="Your generated password will appear here"
                    value={password}
                  />
                  <CopyButton textToBeCopied={password} />
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="password length">
                    Password Length ({passwordLength})
                  </Label>
                  <Slider
                    defaultValue={[passwordLength]}
                    max={30}
                    min={4}
                    step={1}
                    className={cn("w-[80%]")}
                    onChange={(event: React.FormEvent<HTMLDivElement>) =>
                      setPasswordLength(
                        Number((event.target as HTMLInputElement).value)
                      )
                    }
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="uppercase-letters"
                    checked={includeUppercaseAlphabets}
                    onClick={() =>
                      setIncludeUppercaseAlphabets((prev) => !prev)
                    }
                  />

                  <Label htmlFor="uppercase-letters">
                    Uppercase Letters (A-Z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="lowercase-letters"
                    checked={includeLowercaseAlphabets}
                    onClick={() =>
                      setIncludeLowercaseAlphabets((prev) => !prev)
                    }
                  />
                  <Label htmlFor="lowercase-letters">
                    Lowercase Letters (a-z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="numbers"
                    checked={includeNumbers}
                    onClick={() => setIncludeNumbers((prev) => !prev)}
                  />
                  <Label htmlFor="numbers">Numbers (0-9)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="symbols"
                    checked={includeSpecialChars}
                    onClick={() => setIncludeSpecialChars((prev) => !prev)}
                  />
                  <Label htmlFor="symbols">Symbols</Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button onClick={handleGeneratePassword}>Generate Password</Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </CardFooter>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Previous Passwords</CardTitle>
            <CardDescription>
              Review and manage your recently generated passwords.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                  Passwords
                </h4>
                {tags.length > 0 ? (
                  tags.map((tag) => (
                    <>
                      <div key={tag} className="text-sm">
                        {tag}
                      </div>
                      <SelectSeparator className="my-2" />
                    </>
                  ))
                ) : (
                  <div className="text-sm">No passwords generated yet.</div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button onClick={handleClear}>Clear</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PasswordGenerator;
