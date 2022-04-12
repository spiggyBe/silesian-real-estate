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
            type: 'string',
            validation: Rule =>
                Rule.required()
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            validation: Rule =>
                Rule.required(),
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
            validation: Rule =>
                Rule.required(),
            fields: [
                { name: 'street', type: 'string', title: 'Street name' },
                { name: 'streetNo', type: 'string', title: 'Street number' },
                { name: 'city', type: 'string', title: 'City' }
            ]
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint',
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: Rule =>
                Rule.required()
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            validation: Rule =>
                Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            title: 'Is Featured - will shown on Home page',
            name: 'isFeatured',
            type: 'string',
            validation: Rule =>
                Rule.required(),
            options: {
                list: [
                    { title: 'Yes', value: 'yes' },
                    { title: 'No', value: 'no' }
                ],
                layout: 'radio'
            },
        },
        {
            //HAVE TO CREATE OWN SCHEMA AS NEW SCHEMA-FILE AND CREATE MY OWN TYPEs
            title: 'Images collection',
            name: 'images',
            type: 'array',
            of: [{ type: 'propertyImage' }],
            validation: Rule =>
                Rule.required().min(2).warning('Please add minimum 2 of images')
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number',
            validation: Rule =>
                Rule.required()
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
            },
            validation: Rule =>
                Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            },
            validation: Rule =>
                Rule.required()
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
            validation: Rule =>
                Rule.required()
        },
        {
            title: 'Responsible agent',
            name: 'agent',
            type: 'string',
            validation: Rule =>
                Rule.required()
        }
    ]
}