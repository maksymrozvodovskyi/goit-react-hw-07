import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.wrap}>
      <ul className={css.listContact}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.itemBorder}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
