import { format } from "date-fns-tz";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const utcDate = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {format(utcDate, "yyyy-MM-dd HH:mm:ss", { timeZone: "Asia/Tokyo" })}
    </time>
  );
};

export default DateFormatter;
