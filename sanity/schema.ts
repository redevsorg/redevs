import { type SchemaTypeDefinition } from 'sanity'
import teamMember from '../schemas/teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember],
}
