import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle className="flex gap-1 text-2xl font-semibold">
            <span className="text-[#E51015]">Under </span> Construction
          </CardTitle>
          <CardDescription>
            We&apos;re working hard to bring you valuable frontend security
            notes and guidelines. Check back soon for updates!
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button>
            <Link href="/dashboard">Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
