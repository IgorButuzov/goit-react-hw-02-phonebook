import { nanoid } from 'nanoid';

const ContactList = Arr => (
        <ul>
      {Arr.map(item=>{
      const id = nanoid(4)
      return (<li key={id}>{item.name}: {item.tel}</li>)
          }
        )}
      </ul>
    );

export default ContactList;