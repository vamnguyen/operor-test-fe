import { Meeting } from "../lib/definitions";

export default function MeetingDays({ meetings }: { meetings: Meeting[] }) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {meetings.map((meeting, index) => (
        <span
          key={index}
          className="rounded text-xs font-bold w-full px-1 py-1 bg-neutral-200 text-center"
        >
          {meeting.start_day} {"->"} {meeting.end_day}
        </span>
      ))}
    </div>
  );
}
