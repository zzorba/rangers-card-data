export interface Table {
  collection: string;
  fields: string[];
  textFields?: string[];
  foreignKeys?: {
    [field: string]: string | undefined;
  };
}

export const TABLES: { [key: string]: Table } = {
  aspect: {
    collection: 'aspect',
    fields: [],
    textFields: ['name', 'short_name'],
  },
  taboo: {
    collection: 'taboo',
    fields: [],
    textFields: ['name']
  },
  set_type: {
    collection: 'set_type',
    fields: [],
    textFields: ['name'],
  },
  set: {
    collection: 'set',
    fields: ['type_id', 'size'],
    textFields: ['name'],
    foreignKeys: {
      type_id: 'set_type',
    },
  },
  subset: {
    collection: 'subset',
    fields: ['set_id', 'pack_id', 'size'],
    textFields: ['name'],
    foreignKeys: {
      set_id: 'set',
      pack_id: 'pack',
    }
  },
  token: {
    collection: 'token',
    fields: [],
    textFields: ['name', 'plurals'],
  },
  type: {
    collection: 'type',
    fields: [],
    textFields: ['name'],
  },
  area: {
    collection: 'area',
    fields: [],
    textFields: ['name']
  },
  pack: {
    collection: 'pack',
    fields: ['position'],
    textFields: ['name']
  },
  card: {
    collection: 'card',
    fields: [
      'equip',
      'presence',
      'token_id',
      'token_count',
      'harm',
      'progress',
      'approach_conflict',
      'approach_reason',
      'approach_exploration',
      'approach_connection',
      'set_id',
      'set_position',
      'quantity',
      'level',
      'type_id',
      'cost',
      'aspect_id',
      'area_id',
      'guide_entry',
      'progress_fixed',
      'locations',
      'pack_id',
      'illustrator',
      'back_card_id',
      'position',
      'deck_limit',
      'spoiler'
    ],
    textFields: [
      'name',
      'traits',
      'text',
      'flavor',
      'objective',
      'imagesrc',
      'sun_challenge',
      'mountain_challenge',
      'crest_challenge'
    ],
    foreignKeys: {
      token_id: 'token',
      set_id: 'set',
      type_id: 'type',
      aspect_id: 'aspect',
      area_id: 'area',
      pack_id: 'pack',
      taboo_id: 'taboo',
    },
  },
};
