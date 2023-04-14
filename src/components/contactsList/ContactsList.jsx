
import {Contact} from '../contact/Contact'

export const ContactList = ({contacts, onDeleteContact}) => {
    return ( <ul>
         {contacts.map((contact) => {
             return ( 
             <li key={contact.id}>
                 <Contact contact={contact} onDeleteContact={onDeleteContact}/>
             </li> 
             )
         })}
     </ul>
    )
 }