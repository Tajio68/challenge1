import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getData } from "./action";

const Page = async () => {
  const data = await getData();

  const tableSet = data.products.map((data) => (
    <TableRow key={data.id}>
      <TableCell className="font-medium">{data.title}</TableCell>
      <TableCell>{data.availiabilityStatus}</TableCell>
      <TableCell className="text-right">{data.price}</TableCell>
    </TableRow>
  ));

  return (
    <div>
      <h1>Test Fetch API</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableSet}</TableBody>
      </Table>
    </div>
  );
};

export default Page;
