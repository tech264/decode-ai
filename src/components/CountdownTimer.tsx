"use client";

import { useEffect, useState } from "react";
import { ArrowCircleRightIcon } from "@/components/icons";

function getNextDeadline(): Date {
  const now = new Date();
  const deadline = new Date(now);
  deadline.setHours(14, 0, 0, 0);
  if (now >= deadline) {
    deadline.setDate(deadline.getDate() + 1);
  }
  return deadline;
}

function getTimeLeft(deadline: Date) {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
  const [deadline, setDeadline] = useState(getNextDeadline);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(deadline));

  useEffect(() => {
    const id = setInterval(() => {
      const remaining = getTimeLeft(deadline);
      setTimeLeft(remaining);
      if (
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        setDeadline(getNextDeadline());
      }
    }, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const units = [
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="border-y border-[#febf1b]/20 bg-[#0a0a0a] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#febf1b]">
            ₹499 price ends today
          </p>
          <p className="mt-1 text-2xl font-semibold text-white">
            Offer resets every day at 2 PM
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-3">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex w-[76px] flex-col items-center rounded-2xl border border-[#febf1b]/30 bg-[#febf1b]/10 py-3"
              >
                <span className="text-2xl font-bold text-[#febf1b] tabular-nums">
                  {pad(unit.value)}
                </span>
                <span className="text-xs font-medium text-white/50">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#enroll"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#febf1b] px-6 py-3.5 text-base font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.02]"
          >
            Enroll Now
            <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
          </a>
        </div>
      </div>
    </section>
  );
}
