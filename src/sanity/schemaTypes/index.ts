import { type SchemaTypeDefinition } from 'sanity'
import pudding from './pudding'
import jelly from './jelly'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pudding, jelly, ],
}
