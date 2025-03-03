import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

/**
 * History View
 * @constructor
 */
function History({historyActions}: any = []) {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyActions?.map((history: any) => (
            <TableRow key={history.invoice}>
              <TableCell className="font-medium">{history.invoice}</TableCell>
              <TableCell>{history.paymentStatus}</TableCell>
              <TableCell>{history.paymentMethod}</TableCell>
              <TableCell className="text-right">{history.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}

export default History
