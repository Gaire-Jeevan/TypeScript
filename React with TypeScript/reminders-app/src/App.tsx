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

  const removeReminder = (id: number) => {
    setReminder(reminders.filter(reminder => reminder.id !== id))
  }

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>{" "}
    </div>
  );
}

export default App;
