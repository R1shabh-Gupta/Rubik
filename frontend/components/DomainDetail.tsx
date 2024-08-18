import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { differenceInMonths, format } from "date-fns";
import Image from "next/image";

const DomainDetail = ({
  urlDetails,
  advanceUrlDetails,
}: {
  urlDetails: any;
  advanceUrlDetails: any;
}) => {
  return (
    <div className="flex gap-4 flex-wrap ">
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This website contacted {urlDetails.results[0].stats.uniqIPs} IPs in{" "}
            {urlDetails.results[0].stats.uniqCountries} countries to perform{" "}
            {urlDetails.results[0].stats.requests} HTTP transactions. The main
            IP is {urlDetails.results[0].page.ip}, located in{" "}
            {urlDetails.results[0].page.country} and belongs to{" "}
            {urlDetails.results[0].page.asnname} . The main domain is{" "}
            {urlDetails.results[0].task.domain}. TLS certificate: Issued by
            {urlDetails.results[0].page.tlsIssuer} on{" "}
            {format(
              new Date(urlDetails.results[0].page.tlsValidFrom),
              "MMMM do, yyyy"
            )}
            . Valid for:{" "}
            {Math.ceil(urlDetails.results[0].page.tlsValidDays / 30)} months.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-transparent h-max">
        <CardHeader>
          <CardTitle>Screenshot</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={urlDetails.results[0].screenshot}
            alt="screenshot"
            width={400}
            height={200}
            className="rounded-lg"
          />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4 flex-wrap">
        <Card className="bg-transparent h-max">
          <CardHeader>
            <CardTitle>Page Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{urlDetails.results[0].page.title}</p>
          </CardContent>
        </Card>

        <Card className="bg-transparent h-max">
          <CardHeader>
            <CardTitle>Page Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <span className="font-semibold">Data Length: </span>{" "}
                {urlDetails.results[0].stats.dataLength}
              </li>
              <li>
                <span className="font-semibold">Encoded Data Length: </span>{" "}
                {urlDetails.results[0].stats.encodedDataLength}
              </li>
              <li>
                <span className="font-semibold">Requests: </span>{" "}
                {urlDetails.results[0].stats.requests}
              </li>
              <li>
                <span className="font-semibold">Unique Countries: </span>{" "}
                {urlDetails.results[0].stats.uniqCountries}
              </li>
              <li>
                <span className="font-semibold">Unique IPs: </span>{" "}
                {urlDetails.results[0].stats.uniqIPs}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-transparent h-max">
        <CardHeader>
          <CardTitle>Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              Total {advanceUrlDetails.lists.certificates.length} certificates
              found
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Issuer</TableHead>
                <TableHead>Validity</TableHead>
                <TableHead>Valid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advanceUrlDetails.lists.certificates.map(
                (certificate: any, index: number) => {
                  const date_validFrom = format(
                    new Date(certificate.validFrom * 1000),
                    "yyyy-MM-dd"
                  );

                  const date_validTo = format(
                    new Date(certificate.validTo * 1000),
                    "yyyy-MM-dd"
                  );
                  return (
                    <TableRow key={index}>
                      <TableCell>{certificate.issuer}</TableCell>
                      <TableCell>
                        {date_validFrom + " - " + date_validTo}
                      </TableCell>
                      <TableCell>
                        {differenceInMonths(date_validTo, date_validFrom)}{" "}
                        months
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-transparent h-max">
        <CardHeader>
          <CardTitle>IP Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              Total {advanceUrlDetails.stats.serverStats.length} IP found
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>IP</TableHead>
                <TableHead className="hidden sm:flex">Country</TableHead>
                <TableHead>Server</TableHead>
                <TableHead className="hidden sm:flex">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advanceUrlDetails.stats.serverStats.map(
                (serverStat: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{serverStat.ips}</TableCell>
                      <TableCell className="hidden sm:flex">
                        {serverStat.countries}
                      </TableCell>
                      <TableCell>{serverStat.server}</TableCell>
                      <TableCell className="hidden sm:flex">
                        {serverStat.size}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainDetail;
