import { type SchemaTypeDefinition } from 'sanity'
import pudding from './pudding'
import jelly from './jelly'
import ContactForm from "./contact-form";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pudding, jelly, ContactForm],
}
