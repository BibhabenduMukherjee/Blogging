import {defineType, defineField} from 'sanity'


export default defineType({
    name: 'codes',
    title: 'code',
    type: 'document',
    fields: [
        defineField({
            type: 'code',
            name: 'myCodeField',
            title: 'My code field',
          }),
    ],
   
  })
  