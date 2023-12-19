import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver } from 'graphql';

function pageContentDirective(schema, directiveName) {
    return mapSchema(schema, {
      // Executes once for each object field in the schema
      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
        // Check whether this field has the specified directive
        const pageContentDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
        if (pageContentDirective) {
          // Get this field's original resolver
          const { resolve = defaultFieldResolver } = fieldConfig;
  
          // Replace the original resolver with a function that *first* calls
          // the original resolver, then converts its result to upper case
          fieldConfig.resolve = async function (source, args, context, info) {
            const result = await resolve(source, args, context, info);
            return result;
          };
          return fieldConfig;
        }
      },
    });
  }

export { pageContentDirective }