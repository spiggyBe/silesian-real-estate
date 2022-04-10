export default {
    title: 'Property',
    name: 'property',
    type: 'document',
    fields: [
        {
            title: 'ID',
            name: 'id',
            type: 'number'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'House', value: 'house' },
                    { title: 'Flat', value: 'flat' },
                    { title: 'Apartment', value: 'apartment' },
                    { title: 'Plot', value: 'plot' },
                ],
                layout: 'radio'
            }
        },
        {
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
                { name: 'street', type: 'string', title: 'Street name' },
                { name: 'streetNo', type: 'string', title: 'Street number' },
                { name: 'city', type: 'string', title: 'City' }
            ]
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            //HAVE TO CREATE OWN SCHEMA AS NEW SCHEMA-FILE AND CREATE MY OWN TYPEs
            title: 'Images collection',
            name: 'images',
            type: 'array',
            of: [{ type: 'propertyImage' }]
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number'
        },
        {
            title: 'Garden',
            name: 'garden',
            type: 'string',
            options: {
                list: [
                    { title: 'Yes', value: 'yes' },
                    { title: 'No', value: 'no' }
                ],
                layout: 'radio'
            }
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Agent',
            name: 'agent',
            type: 'string'
        }
    ]
}