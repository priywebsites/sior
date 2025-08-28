import { useState, useEffect } from "react";
import { BUSINESS_HOURS } from "@/lib/constants";

export function useBusinessHours() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    currentDay: number;
    message: string;
  }>({
    isOpen: false,
    currentDay: 0,
    message: "Closed"
  });

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const currentHour = now.getHours();
      
      const todaysHours = BUSINESS_HOURS[dayOfWeek as keyof typeof BUSINESS_HOURS];
      
      let isOpen = false;
      let message = "Closed";
      
      if (todaysHours && currentHour >= todaysHours.open && currentHour < todaysHours.close) {
        isOpen = true;
        message = "Open";
      }
      
      setStatus({
        isOpen,
        currentDay: dayOfWeek,
        message
      });
    }

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const getFormattedHours = () => {
    const days = [
      { name: "Sunday", key: 0 },
      { name: "Monday", key: 1 },
      { name: "Tuesday", key: 2 },
      { name: "Wednesday", key: 3 },
      { name: "Thursday", key: 4 },
      { name: "Friday", key: 5 },
      { name: "Saturday", key: 6 }
    ];

    return days.map(day => {
      const hours = BUSINESS_HOURS[day.key as keyof typeof BUSINESS_HOURS];
      return {
        name: day.name,
        hours: hours ? "9:00 AM - 7:00 PM" : "Closed",
        isToday: day.key === status.currentDay,
        isClosed: !hours
      };
    });
  };

  return {
    isOpen: status.isOpen,
    message: status.message,
    currentDay: status.currentDay,
    formattedHours: getFormattedHours()
  };
}
