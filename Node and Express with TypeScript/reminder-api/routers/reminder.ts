import { Router } from "express";
import { CreateReminderDto } from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders)
});



router.post("/", (req, res) => {
  // here it is type any as express doesn't know it's type

  // request.body is undefind, and we cannot dstructure it. the reason this is happening is because, by default, express doesn't parse incoming request bodies. to solve this problem, we have to install a special middleware '''in index.ts''' at the top after app is created '''app.use(express.json())'''
  const {title} = req.body as CreateReminderDto

  const reminder = new Reminder(title);
  reminders.push(reminder)
  res.status(201).json(reminder)

  res.json(title)
});

export default router;
