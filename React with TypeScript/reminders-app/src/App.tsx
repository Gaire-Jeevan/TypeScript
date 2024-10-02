import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminders";

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([]);

  // as we cannot pass async callback in useEffect so used different function and pass it here
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminder(reminders);
  };

  return (
    <div className="App">
      <ReminderList items={reminders} />{" "}
    </div>
  );
}

export default App;
