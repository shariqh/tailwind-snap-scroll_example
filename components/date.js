import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, className }) {
  const date = parseISO(dateString);
  // return <time dateTime={dateString} className={className}>{format(date, 'LLLL	d, yyyy')}</time>
  return (
    <time dateTime={dateString} className={className}>
      {format(date, "MMM do yy")}
    </time>
  );
}
