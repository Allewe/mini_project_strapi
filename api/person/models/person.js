'use strict';
const slugify = require('slugify');
const {hash} = require("bcryptjs");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles:{
        beforeCreate: async (data) => {
            console.log(data)
            if(data.first_name && data.last_name){
                data.slug = slugify(data.first_name + '-' + data.last_name, {lower: true, replacement : "-"} )
            }
              
        
            
        },
        beforeUpdate: async (params, data) => {
            if(data.first_name && data.last_name){
                data.slug = slugify(data.first_name + '-' + data.last_name, {lower: true, replacement : "-"} )
            }
            
        }
    }
    
};
