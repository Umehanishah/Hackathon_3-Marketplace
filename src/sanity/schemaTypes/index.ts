import { type SchemaTypeDefinition } from 'sanity'
import pudding from './pudding'
import jelly from './jelly'
import ContactForm from "./contact-form";
import recipy from './recipy';
import jrecipy from './jrecipy';
import payment from './payment';




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
          pudding, 
          jelly, 
          ContactForm, 
          recipy, 
          jrecipy,
          payment
        ],
}
