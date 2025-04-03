import type { PascalToCamelCase } from '@/types/formatter'

export const pascalToCamelCase = <GenericString extends string>(
  string: GenericString,
): PascalToCamelCase<GenericString> => {
  return (string.charAt(0).toLowerCase() + string.slice(1)) as PascalToCamelCase<GenericString>
}
